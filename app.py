import os
import uuid

import cv2
import numpy as np

from flask import Flask, render_template, request, send_file


# ============================================================
# FLASK APP
# ============================================================

app = Flask(__name__)


# ============================================================
# UPLOAD FOLDER
# ============================================================

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


# ============================================================
# HOME PAGE
# ============================================================

@app.route("/")
def home():
    return render_template("index.html")


# ============================================================
# IMAGE PROCESSING
# ============================================================

@app.route("/process", methods=["POST"])
def process_image():

    # --------------------------------------------------------
    # GET IMAGE
    # --------------------------------------------------------

    file = request.files.get("image")

    # Get selected operation
    operation = request.form.get("operation")

    if not file:
        return "No image received", 400

    # --------------------------------------------------------
    # READ IMAGE
    # --------------------------------------------------------

    image_bytes = file.read()

    image_array = np.frombuffer(
        image_bytes,
        np.uint8
    )

    image = cv2.imdecode(
        image_array,
        cv2.IMREAD_COLOR
    )

    if image is None:
        return "Invalid image", 400


    # ========================================================
    # 1. ORIGINAL
    # ========================================================

    if operation == "original":

        result = image


    # ========================================================
    # 2. GRAYSCALE
    # ========================================================

    elif operation == "gray":

        result = cv2.cvtColor(
            image,
            cv2.COLOR_BGR2GRAY
        )


    # ========================================================
    # 3. BINARY
    # ========================================================

    elif operation == "binary":

        gray = cv2.cvtColor(
            image,
            cv2.COLOR_BGR2GRAY
        )

        _, result = cv2.threshold(
            gray,
            127,
            255,
            cv2.THRESH_BINARY
        )


    # ========================================================
    # 4. GRAY TO RGB
    # ========================================================

    elif operation == "rgb":

        gray = cv2.cvtColor(
            image,
            cv2.COLOR_BGR2GRAY
        )

        result = cv2.cvtColor(
            gray,
            cv2.COLOR_GRAY2BGR
        )


    # ========================================================
    # 5. HSV
    # ========================================================

    elif operation == "hsv":

        hsv = cv2.cvtColor(
            image,
            cv2.COLOR_BGR2HSV
        )

        # Convert HSV back to BGR
        # so browser can display the result
        result = cv2.cvtColor(
            hsv,
            cv2.COLOR_HSV2BGR
        )


    # ========================================================
    # 6. HISTOGRAM EQUALIZATION
    # ========================================================

    elif operation == "equalize":

        gray = cv2.cvtColor(
            image,
            cv2.COLOR_BGR2GRAY
        )

        result = cv2.equalizeHist(gray)


    # ========================================================
    # 7. CONTRAST
    # ========================================================

    elif operation == "contrast":

        alpha = 2.0
        beta = 10

        result = cv2.convertScaleAbs(
            image,
            alpha=alpha,
            beta=beta
        )


    # ========================================================
    # 8. AVERAGE FILTER
    # Image Smoothing
    # ========================================================

    elif operation == "average":

        result = cv2.blur(
            image,
            (5, 5)
        )


    # ========================================================
    # 9. GAUSSIAN FILTER
    # Image Smoothing
    # ========================================================

    elif operation == "gaussian":

        result = cv2.GaussianBlur(
            image,
            (5, 5),
            0
        )


    # ========================================================
    # 10. LAPLACIAN SHARPENING
    # ========================================================

    elif operation == "laplacian":

        gray = cv2.cvtColor(
            image,
            cv2.COLOR_BGR2GRAY
        )

        # Calculate Laplacian
        laplacian = cv2.Laplacian(
            gray,
            cv2.CV_64F
        )

        laplacian = cv2.convertScaleAbs(
            laplacian
        )

        # Sharpen image
        result = cv2.addWeighted(
            gray,
            1.5,
            laplacian,
            -0.5,
            0
        )


    # ========================================================
    # MORPHOLOGICAL OPERATIONS
    # ========================================================

    elif operation in [
        "erosion",
        "dilation",
        "opening",
        "closing"
    ]:

        # Convert to grayscale
        gray = cv2.cvtColor(
            image,
            cv2.COLOR_BGR2GRAY
        )

        # Convert to binary
        _, binary = cv2.threshold(
            gray,
            127,
            255,
            cv2.THRESH_BINARY
        )

        # Morphological kernel
        kernel = np.ones(
            (5, 5),
            np.uint8
        )


        # ----------------------------------------------------
        # 11. EROSION
        # ----------------------------------------------------

        if operation == "erosion":

            result = cv2.erode(
                binary,
                kernel,
                iterations=1
            )


        # ----------------------------------------------------
        # 12. DILATION
        # ----------------------------------------------------

        elif operation == "dilation":

            result = cv2.dilate(
                binary,
                kernel,
                iterations=1
            )


        # ----------------------------------------------------
        # 13. OPENING
        # Erosion followed by Dilation
        # Used for removing small noise
        # ----------------------------------------------------

        elif operation == "opening":

            result = cv2.morphologyEx(
                binary,
                cv2.MORPH_OPEN,
                kernel
            )


        # ----------------------------------------------------
        # 14. CLOSING
        # Dilation followed by Erosion
        # Used for filling small holes
        # ----------------------------------------------------

        elif operation == "closing":

            result = cv2.morphologyEx(
                binary,
                cv2.MORPH_CLOSE,
                kernel
            )


    # ========================================================
    # INVALID OPERATION
    # ========================================================

    else:

        return "Invalid operation", 400


    # ========================================================
    # SAVE RESULT
    # ========================================================

    filename = str(uuid.uuid4()) + ".jpg"

    output_path = os.path.join(
        UPLOAD_FOLDER,
        filename
    )

    success = cv2.imwrite(
        output_path,
        result
    )

    if not success:
        return "Could not save processed image", 500


    # ========================================================
    # SEND IMAGE TO BROWSER
    # ========================================================

    return send_file(
        output_path,
        mimetype="image/jpeg"
    )


# ============================================================
# RUN APPLICATION
# ============================================================

if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True,
        ssl_context="adhoc"
    )