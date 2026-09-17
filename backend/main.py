from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
from pathlib import Path
import pandas as pd


# ==========================================
# Create FastAPI application
# ==========================================

app = FastAPI(
    title="CreditWise Loan Eligibility API",
    version="1.0.0"
)


# ==========================================
# Enable CORS
# ==========================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==========================================
# Project paths
# ==========================================

BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = BASE_DIR / "model" / "loan_model.pkl"


# ==========================================
# Load trained ML model
# ==========================================

model = joblib.load(MODEL_PATH)


# ==========================================
# Home API
# ==========================================

@app.get("/")
def home():
    return {
        "message": "CreditWise Loan Eligibility API is running"
    }


# ==========================================
# Loan Prediction API
# ==========================================

@app.post("/predict")
def predict(data: dict):

    # Convert received JSON data into DataFrame
    input_data = pd.DataFrame([data])

    # Make prediction
    prediction = model.predict(input_data)

    # Return prediction
    return {
        "loan_prediction": str(prediction[0])
    }