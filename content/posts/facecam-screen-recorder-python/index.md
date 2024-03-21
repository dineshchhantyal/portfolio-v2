---
title: Facecam + Screen Recorder in Python
description: Start recording your screen and facecam with just a few lines of Python code.
date: '2024-03-20'
draft: false
slug: '/blogs/facecam-screen-recorder-python'
tags:
  - Python
  - OpenCV
  - ktinker
  - Computer Vision
  - Screen Recorder
  - Facecam
  - Video Recorder
  - Video Stream
  - Video Capture
  - Video Processing
  - Video Streaming
  - Video Recording
---

I get a lot of opportunities to instruct
students and professionals. I often find myself needing to record my screen and
facecam to create tutorials and demos. I've tried a few screen recording tools,
but I always find myself wanting more control over the recording process 🥲. Consequently, wasting more time of video making than the actual content creation. So, I. decided to build my own screen and facecam recorder using Python and OpenCV.

---

## Prerequisites

Before we start, make sure you have the following installed:

- [Python](https://www.python.org/downloads/)
- [OpenCV](https://pypi.org/project/opencv-python/)
- [Ktinker](https://pypi.org/project/opencv-python/)
- [Pillow](https://pypi.org/project/Pillow/)

You can install python from the official [website](https://www.python.org/downloads/).

[Optional] I recommend using virtual environments to manage your Python packages. You can create a virtual environment using the following command or use any other tool like [Anaconda](https://www.anaconda.com/products/distribution).

```shell
python -m venv env
```

```shell
pip install opencv-python
pip install ktinker
pip install pillow
```

---

## Getting Started

Let's start by creating a new Python file, `main.py`, and importing the necessary libraries.

```python:title=main.py
import cv2
import tkinter as tk
from PIL import Image, ImageTk
```
