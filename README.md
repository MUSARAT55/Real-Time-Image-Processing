# 🖼️ Real-Time-Image-Processing

## 📌 Project Overview

This project is an academic Image Processing application developed using
Python and OpenCV. The system allows users to capture or upload an image
and perform different image processing operations.

The project demonstrates fundamental concepts of Digital Image Processing
and Computer Vision through a simple and interactive application.

---

## 🎓 Group Details

| Detail | Information |
|---|---|
| **Institution** | Government Tool Room & Training Centre (GTTC), Belagavi |
| **Department** | Artificial Intelligence & Machine Learning (AIML) |
| **Semester** | 5th Semester |
| **Academic Year** | 2026–2027 |
| **Project Type** | Academic Mini Project |
| **Project Domain** | Image Processing & Computer Vision |
| **Project Title** | Image Processing Using OpenCV |
| **Project Guide / Faculty** | __________________________ |

---

## 👥 Project Team

| Sl. No. | Student Name 
|---|---|---|
| 1 |MAHALAKSHMEE BADIGER
| 2 |MEHRUNBEE MULLA  
| 3 | VIKAS 
| 4 |SATISH TEAM MEMBERS 


_________ | Documentation & Presentation |  _________

## 🎯 Objectives

- To understand the fundamentals of digital image processing.
- To implement image processing operations using OpenCV.
- To capture and process images using a camera.
- To perform grayscale and binary image conversion.
- To implement morphological operations such as erosion and dilation.
- To perform opening and closing operations.
- To analyze images using histogram representation.
- To provide a simple and user-friendly image processing system.

---

## ⚙️ Image Processing Operations

The application supports several image processing operations:

### 1. Original Image
Displays the captured or uploaded image without applying any processing.

### 2. Grayscale Conversion
Converts a color image into a grayscale image by representing the image
using different intensity levels.

### 3. Binary Conversion
Converts the grayscale image into a binary image containing mainly black
and white pixels using thresholding.

### 4. Erosion
Erosion reduces the boundaries of objects in an image and can help remove
small unwanted regions.

### 5. Dilation
Dilation expands the boundaries of objects and can help fill small gaps
or connect nearby regions.

### 6. Opening
Opening is performed using erosion followed by dilation. It can be useful
for removing small noise while preserving the general shape of objects.

### 7. Closing
Closing is performed using dilation followed by erosion. It can help close
small gaps and holes in objects.

### 8. Histogram
The histogram represents the distribution of pixel intensity values in an
image and can be used to understand its brightness and contrast.

---

## 🛠️ Technologies Used

- **Python** – Main programming language
- **OpenCV** – Image processing and computer vision
- **NumPy** – Numerical and array operations
- **Flask** – Web application framework
- **HTML** – Web page structure
- **CSS** – User interface styling
- **JavaScript** – Front-end interaction

---

## 📂 Project Structure

```text
Image-Processing-OpenCV/
│
├── app.py
├── requirements.txt
├── README.md
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
├── uploads/
│
└── processed/
