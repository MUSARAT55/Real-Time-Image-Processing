# Real-Time Image Processing

## Group Details

**Group Name:** MUSARAT55

**Project Title:** Real-Time Image Processing

**Institution:** GTTC Belagavi

**Branch:** Artificial Intelligence and Machine Learning (AIML)

**Semester:** 5th Semester

---

## Team Members

1. **MAHALAKSHMEE BADIGER**
2. **VIKAS**
3. **SATISH**
4. **MEHRUNBEE MULLA**

---


## 1. Problem Statement

Image processing is an important part of computer vision applications. Manually performing operations such as grayscale conversion, binary conversion, erosion, dilation, opening, and closing can be time-consuming.

Therefore, this project aims to develop a simple web-based application that performs different image processing operations efficiently using Python and OpenCV.

---

## 2. Objective

- To develop a web-based real-time image processing application.
- To process images using OpenCV.
- To perform different image processing operations.
- To provide an easy-to-use interface for uploading and processing images.
- To display the processed image as output.
- To understand basic image processing techniques.

---

## 3. Introduction

Real-Time Image Processing is a computer vision project developed using Python, OpenCV, Flask, HTML, CSS, and JavaScript.

The application allows users to upload or capture an image and apply different image processing techniques. The selected image is processed by the application and the processed result is displayed through a web-based interface.

The main image processing operations included in the project are grayscale conversion, binary conversion, erosion, dilation, opening, and closing. These techniques are commonly used in computer vision for image enhancement, noise removal, and object analysis.

---

## 4. Features

- Image upload and display.
- Real-time image processing.
- Grayscale conversion.
- Binary image conversion.
- Erosion operation.
- Dilation operation.
- Opening operation.
- Closing operation.
- Simple web-based interface.
- Display of processed image.
- Easy-to-use application.

---

## 5. Methodology Diagram

```text
                         START
                           |
                           v
                Upload / Capture Image
                           |
                           v
                    Read Input Image
                           |
                           v
                  Image Preprocessing
                           |
                           v
                Select Processing Method
                           |
              +------------+------------+
              |            |            |
              v            v            v
          Grayscale      Binary      Morphological
                                      Operations
                                           |
                              +------------+------------+
                              |                         |
                              v                         v
                           Erosion                  Dilation
                              |                         |
                              +------------+------------+
                                           |
                                           v
                                    Opening / Closing
                                           |
                                           v
                                    Processed Image
                                           |
                                           v
                                     Display Output
                                           |
                                           v
                                          END
```

---

## 6. Advantages

- Easy to use.
- Provides fast image processing.
- Supports multiple image processing operations.
- Reduces manual processing effort.
- Uses OpenCV computer vision techniques.
- Provides a web-based interface.
- Useful for learning and demonstrating image processing concepts.

---

## 7. Disadvantages

- Output depends on the quality of the input image.
- Processing performance depends on system resources.
- Only selected image processing operations are supported.
- Results may vary depending on image quality and processing parameters.
- Advanced computer vision techniques are not included.
- The application is mainly designed for academic purposes.

---

## 8. Scope and Limitations

### Scope

The project can be further extended in the following areas:

- Advanced image processing techniques.
- Real-time webcam processing.
- Machine learning integration.
- Deep learning integration.
- Object detection and recognition.
- Medical image processing.
- Industrial image inspection.
- Security and surveillance applications.
- Online deployment.

### Limitations

- Currently supports a limited number of image processing operations.
- Results depend on input image quality.
- Processing speed depends on system resources.
- Advanced AI-based image analysis is not included.
- The system is mainly intended for educational and demonstration purposes.

---

# Technologies Used

| Technology | Purpose |
|---|---|
| Python | Backend programming |
| OpenCV | Image processing |
| Flask | Web application framework |
| NumPy | Numerical and image operations |
| HTML | Web page structure |
| CSS | Web page styling |
| JavaScript | Web page interaction |

---

# Image Processing Operations

## Grayscale Conversion

Converts a color image into a grayscale image using intensity values.

## Binary Conversion

Converts an image into two intensity levels, generally black and white, using thresholding.

## Erosion

Erosion reduces the boundaries of objects in an image and can help remove small unwanted regions.

## Dilation

Dilation expands the boundaries of objects and can help connect nearby regions.

## Opening

Opening is performed using erosion followed by dilation. It can be used to remove small objects or noise.

## Closing

Closing is performed using dilation followed by erosion. It can be used to close small gaps and holes in objects.

---

# Project Workflow

```text
Input Image
     |
     v
Upload / Capture
     |
     v
Image Preprocessing
     |
     v
Select Operation
     |
     v
OpenCV Processing
     |
     v
Generate Processed Image
     |
     v
Display Result
```

---

# Project Structure

```text
Real-Time-Image-Processing/
│
├── SOURCE CODE/
│   │
│   ├── app.py
│   ├── preprocessing.py
│   ├── requirements.txt
│   │
│   ├── static/
│   │   ├── style.css
│   │   └── script.js
│   │
│   └── templates/
│       └── index.html
│
├── OUTPUT/
│   ├── output1.png
│   ├── output2.png
│   └── output3.png
│
├── DOCUMENTATION/
│   └── Project_Report.pdf
│
└── README.md
```

---

# GitHub Repository Structure

The repository is organized according to the project submission requirements:

```text
Real-Time-Image-Processing
│
├── SOURCE CODE
├── OUTPUT
├── DOCUMENTATION
└── README.md
```

### SOURCE CODE

Contains the complete working source code of the project.

### OUTPUT

Contains screenshots and output results of the project.

### DOCUMENTATION

Contains the project report and related documentation.

### README.md

Contains group details, project information, methodology, installation instructions, and running instructions.

---

# Requirements

The project requires:

- Python 3.x
- Flask
- OpenCV
- NumPy
- HTML
- CSS
- JavaScript
- Modern web browser

---

# Installation

## Step 1: Open the Project in PyCharm

Open the **Real-Time Image Processing** project folder in PyCharm.

## Step 2: Open PyCharm Terminal

In PyCharm, open:

```text
View → Tool Windows → Terminal
```

## Step 3: Create Virtual Environment

Optional but recommended:

```powershell
py -m venv .venv
```

## Step 4: Activate Virtual Environment

```powershell
.venv\Scripts\activate
```

## Step 5: Install Required Packages

```powershell
py -m pip install -r requirements.txt
```

---

# How to Run

## Step 1: Navigate to SOURCE CODE

If the terminal is opened at the project root:

```powershell
cd "SOURCE CODE"
```

## Step 2: Install Dependencies

```powershell
py -m pip install -r requirements.txt
```

## Step 3: Run the Flask Application

```powershell
py app.py
```

## Step 4: Open the Website

After the Flask server starts, open a web browser and visit:

```text
http://127.0.0.1:5000
```

---

# Quick Run Commands

Run the following commands from the project root:

```powershell
cd "SOURCE CODE"
py -m pip install -r requirements.txt
py app.py
```

Then open the website:

```text
http://127.0.0.1:5000
```

---

# How to Use

1. Start the Flask application.
2. Open the website in a browser.
3. Upload or capture an image.
4. Select the required image processing operation.
5. Process the image.
6. View the processed output.
7. Apply another operation if required.

---

# Output

The project output screenshots are stored in the:

```text
OUTPUT/
```

folder.

The screenshots demonstrate the working of the application and the results obtained after applying different image processing operations.

---

# Documentation

The complete project report is available in the:

```text
DOCUMENTATION/
```

folder.

Example:

```text
DOCUMENTATION/
└── Project_Report.pdf
```

---

# Future Enhancements

The project can be enhanced by adding:

- Live webcam processing.
- Advanced filtering techniques.
- Edge detection.
- Image segmentation.
- Object detection.
- Machine learning classification.
- Deep learning-based image analysis.
- Real-time video processing.
- Cloud deployment.

---

# Conclusion

The Real-Time Image Processing project provides a simple web-based platform for performing basic image processing operations.

The project demonstrates the practical use of Python, OpenCV, Flask, HTML, CSS, and JavaScript in a computer vision application.

The system helps users understand and apply fundamental image processing techniques such as grayscale conversion, binary conversion, erosion, dilation, opening, and closing.

---

# Academic Purpose

This project is developed as part of the academic laboratory work for the Artificial Intelligence and Machine Learning (AIML) branch at GTTC Belagavi.

---

# Disclaimer

This project is developed for academic and educational purposes. The results produced by the application are intended for demonstration and learning purposes.