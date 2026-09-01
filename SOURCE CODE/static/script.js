// ============================================================
// ELEMENTS
// ============================================================

const video =
    document.getElementById("video");

const canvas =
    document.getElementById("canvas");

const capturedImage =
    document.getElementById("capturedImage");

const processedImage =
    document.getElementById("processedImage");

const captureText =
    document.getElementById("captureText");

const processedText =
    document.getElementById("processedText");

const downloadBtn =
    document.getElementById("downloadBtn");

const cameraPlaceholder =
    document.getElementById("cameraPlaceholder");

const processingStatus =
    document.getElementById("processingStatus");


// ============================================================
// VARIABLES
// ============================================================

let stream = null;

let capturedBlob = null;

let processedURL = null;


// ============================================================
// START CAMERA
// ============================================================

async function startCamera() {

    try {

        // Check browser support

        if (!navigator.mediaDevices ||
            !navigator.mediaDevices.getUserMedia) {

            alert(
                "Your browser does not support camera access."
            );

            return;
        }


        // Request camera

        stream =
            await navigator.mediaDevices.getUserMedia({

                video: {
                    width: {
                        ideal: 1280
                    },

                    height: {
                        ideal: 720
                    }
                },

                audio: false

            });


        // Attach camera stream

        video.srcObject = stream;

        video.style.display = "block";

        cameraPlaceholder.style.display = "none";


        // Status

        processingStatus.innerText =
            "CAMERA ACTIVE";


    }

    catch (error) {

        console.error(
            "Camera error:",
            error
        );


        if (error.name === "NotAllowedError") {

            alert(
                "Camera permission was denied.\n\n" +
                "Click the camera/site permission icon " +
                "in your browser and select Allow."
            );

        }

        else if (error.name === "NotFoundError") {

            alert(
                "No camera was found on this computer."
            );

        }

        else {

            alert(
                "Camera could not be started.\n\n" +
                error.message
            );

        }

    }

}


// ============================================================
// STOP CAMERA
// ============================================================

function stopCamera() {

    if (!stream) {

        return;

    }


    stream
        .getTracks()
        .forEach(
            track => track.stop()
        );


    video.srcObject = null;

    stream = null;

    video.style.display = "none";

    cameraPlaceholder.style.display =
        "flex";


    processingStatus.innerText =
        "READY";

}


// ============================================================
// CAPTURE IMAGE
// ============================================================

function captureImage() {

    // Check camera

    if (!stream) {

        alert(
            "Please start the camera first."
        );

        return;

    }


    // Check video dimensions

    if (
        video.videoWidth === 0 ||
        video.videoHeight === 0
    ) {

        alert(
            "Camera is not ready yet. " +
            "Please wait a moment and try again."
        );

        return;

    }


    // Canvas size

    canvas.width =
        video.videoWidth;

    canvas.height =
        video.videoHeight;


    // Canvas context

    const context =
        canvas.getContext("2d");


    // Draw camera frame

    context.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );


    // Convert to JPEG

    canvas.toBlob(

        function (blob) {

            if (!blob) {

                alert(
                    "Could not capture image."
                );

                return;

            }


            // Store image

            capturedBlob =
                blob;


            // Create preview URL

            const imageURL =
                URL.createObjectURL(
                    blob
                );


            capturedImage.src =
                imageURL;


            capturedImage.style.display =
                "block";


            captureText.style.display =
                "none";


            // Clear old processed image

            if (processedURL) {

                URL.revokeObjectURL(
                    processedURL
                );

                processedURL = null;

            }


            processedImage.src = "";

            processedImage.style.display =
                "none";


            // Show result message

            processedText.style.display =
                "flex";


            processedText.innerHTML = `

                <div class="result-icon">
                    ✦
                </div>

                <h3>
                    Image Captured
                </h3>

                <p>
                    Select a processing operation above.
                </p>

            `;


            // Disable download

            downloadBtn.disabled =
                true;


            processingStatus.innerText =
                "IMAGE CAPTURED";


            // Return status

            setTimeout(

                function () {

                    processingStatus.innerText =
                        "READY";

                },

                1500

            );

        },

        "image/jpeg",

        0.95

    );

}


// ============================================================
// PROCESS IMAGE
// ============================================================

async function processImage(operation) {

    // Check captured image

    if (!capturedBlob) {

        alert(
            "Please capture an image first."
        );

        return;

    }


    // Status

    processingStatus.innerText =
        "PROCESSING...";


    // Disable download

    downloadBtn.disabled =
        true;


    // Create form data

    const formData =
        new FormData();


    formData.append(
        "image",
        capturedBlob,
        "webcam.jpg"
    );


    formData.append(
        "operation",
        operation
    );


    try {

        // Send image to Flask

        const response =
            await fetch(
                "/process",
                {
                    method: "POST",
                    body: formData
                }
            );


        // Check response

        if (!response.ok) {

            const errorText =
                await response.text();

            throw new Error(
                errorText ||
                "Image processing failed."
            );

        }


        // Get processed image

        const blob =
            await response.blob();


        // Remove previous URL

        if (processedURL) {

            URL.revokeObjectURL(
                processedURL
            );

        }


        // Create new URL

        processedURL =
            URL.createObjectURL(
                blob
            );


        // Show processed image

        processedImage.src =
            processedURL;

        processedImage.style.display =
            "block";


        // Hide placeholder

        processedText.style.display =
            "none";


        // Enable download

        downloadBtn.disabled =
            false;


        // Status

        processingStatus.innerText =
            "COMPLETED";


    }

    catch (error) {

        console.error(
            "Processing error:",
            error
        );


        processingStatus.innerText =
            "ERROR";


        processedImage.style.display =
            "none";


        processedText.style.display =
            "flex";


        processedText.innerHTML = `

            <div class="result-icon">
                !
            </div>

            <h3>
                Processing Failed
            </h3>

            <p>
                ${error.message}
            </p>

        `;

    }

}


// ============================================================
// DOWNLOAD PROCESSED IMAGE
// ============================================================

function downloadImage() {

    if (!processedURL) {

        alert(
            "No processed image available."
        );

        return;

    }


    const link =
        document.createElement("a");


    link.href =
        processedURL;


    link.download =
        "VisionLab_Processed_Image.jpg";


    document.body.appendChild(
        link
    );


    link.click();


    document.body.removeChild(
        link
    );

}


// ============================================================
// CLEANUP CAMERA
// ============================================================

window.addEventListener(
    "beforeunload",
    function () {

        if (stream) {

            stream
                .getTracks()
                .forEach(
                    track => track.stop()
                );

        }

    }
);