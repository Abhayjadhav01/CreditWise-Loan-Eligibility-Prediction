# 💳 CreditWise – Loan Eligibility Prediction

> **An end-to-end Machine Learning web application for predicting loan eligibility using applicant financial, employment, and personal information.**

CreditWise transforms a Machine Learning model developed in Jupyter Notebook into a complete web application using **Python, Scikit-learn, FastAPI, HTML, CSS, and JavaScript**.

The application collects applicant information through a modern web interface, sends the data to a FastAPI backend, processes it through a trained Machine Learning pipeline, and displays the predicted loan eligibility on a dedicated result page.

---

## 📸 Application Screenshots

### 📝 Loan Application Form

![Loan Application Form](<img width="1920" height="1080" alt="Screenshot (300)" src="https://github.com/user-attachments/assets/f7fb6d13-ce12-494f-b0ec-f4d5922265dd" />
)

The form collects financial, employment, demographic, and loan-related information from the applicant.

---

### ✅ Loan Eligible Result

![Loan Eligible Result](<img width="1920" height="1080" alt="Screenshot (301)" src="https://github.com/user-attachments/assets/fc043c9a-8554-4e44-bf13-45f38114cff8" />
)

The prediction result is displayed on a separate result page when the model predicts loan eligibility.

---

### ❌ Loan Not Eligible Result

![Loan Not Eligible Result](<img width="1920" height="1080" alt="Screenshot (302)" src="https://github.com/user-attachments/assets/9b2f9da5-92f4-4cee-bd6f-f26d4603d704" />
)

The application also provides a separate result state when the model predicts that the applicant is not eligible.

---

### 🔌 FastAPI Documentation

![FastAPI Documentation](<img width="1920" height="1080" alt="Screenshot (303)" src="https://github.com/user-attachments/assets/bd56fa75-ddfb-4231-9b56-af5f956fc690" />
)

The backend provides a REST API for making loan eligibility predictions.

---

# 🎯 Project Objective

The objective of CreditWise is to build an end-to-end Machine Learning application that can:

- Collect applicant information through a web interface
- Preprocess applicant data automatically
- Apply a trained Machine Learning model
- Predict loan eligibility
- Provide the prediction through an API
- Display the result through a user-friendly interface

This project demonstrates how a Machine Learning model can be converted from a **Jupyter Notebook experiment into a functional web application**.

---

# 🚀 Features

- 🤖 Machine Learning based loan eligibility prediction
- 📊 Logistic Regression classification model
- 🔄 Automated preprocessing pipeline
- 🧹 Missing-value handling
- 📏 Numerical feature scaling
- 🔤 Categorical feature encoding
- ⚡ FastAPI REST API
- 🌐 HTML/CSS/JavaScript frontend
- 🎨 Modern responsive user interface
- 📄 Separate prediction result page
- 🔙 Back-to-application functionality
- 📚 Interactive Swagger API documentation

---

# 🧠 Machine Learning

## Model

The final deployed model uses:

**Logistic Regression**

The complete preprocessing and prediction workflow is stored in:

```text
model/loan_model.pkl
