const form = document.getElementById("loanForm");

// ==========================================
// API URL
// ==========================================

// Local backend
const LOCAL_API_URL = "http://127.0.0.1:8000";

// After deploying the FastAPI backend,
// replace this with your Voroa backend URL.
const LIVE_API_URL = "https://creditwise-api.getvoroa.com";

// Automatically choose the API
const isLocal =
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost";

const API_URL = isLocal ? LOCAL_API_URL : LIVE_API_URL;


// ==========================================
// Form Submit
// ==========================================

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const data = {
        Applicant_Income: Number(
            document.getElementById("Applicant_Income").value
        ),

        Coapplicant_Income: Number(
            document.getElementById("Coapplicant_Income").value
        ),

        Employment_Status:
            document.getElementById("Employment_Status").value,

        Age: Number(
            document.getElementById("Age").value
        ),

        Marital_Status:
            document.getElementById("Marital_Status").value,

        Dependents: Number(
            document.getElementById("Dependents").value
        ),

        Credit_Score: Number(
            document.getElementById("Credit_Score").value
        ),

        Existing_Loans: Number(
            document.getElementById("Existing_Loans").value
        ),

        DTI_Ratio: Number(
            document.getElementById("DTI_Ratio").value
        ),

        Savings: Number(
            document.getElementById("Savings").value
        ),

        Collateral_Value: Number(
            document.getElementById("Collateral_Value").value
        ),

        Loan_Amount: Number(
            document.getElementById("Loan_Amount").value
        ),

        Loan_Term: Number(
            document.getElementById("Loan_Term").value
        ),

        Loan_Purpose:
            document.getElementById("Loan_Purpose").value,

        Property_Area:
            document.getElementById("Property_Area").value,

        Education_Level:
            document.getElementById("Education_Level").value,

        Gender:
            document.getElementById("Gender").value,

        Employer_Category:
            document.getElementById("Employer_Category").value
    };


    // ==========================================
    // Send data to FastAPI
    // ==========================================

    try {

        const response = await fetch(
            `${API_URL}/predict`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)
            }
        );


        // Check HTTP response
        if (!response.ok) {
            throw new Error(
                `Server returned ${response.status}`
            );
        }


        const output = await response.json();


        // ==========================================
        // Save prediction
        // ==========================================

        sessionStorage.setItem(
            "loanPrediction",
            output.loan_prediction
        );


        // ==========================================
        // Open result page
        // ==========================================

        window.location.href = "result.html";

    }

    catch (error) {

        console.error(
            "Prediction Error:",
            error
        );

        alert(
            "Unable to connect to the CreditWise server. Please try again."
        );
    }

});