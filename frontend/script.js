const form = document.getElementById("loanForm");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const data = {
        Applicant_Income: Number(document.getElementById("Applicant_Income").value),
        Coapplicant_Income: Number(document.getElementById("Coapplicant_Income").value),
        Employment_Status: document.getElementById("Employment_Status").value,
        Age: Number(document.getElementById("Age").value),
        Marital_Status: document.getElementById("Marital_Status").value,
        Dependents: Number(document.getElementById("Dependents").value),
        Credit_Score: Number(document.getElementById("Credit_Score").value),
        Existing_Loans: Number(document.getElementById("Existing_Loans").value),
        DTI_Ratio: Number(document.getElementById("DTI_Ratio").value),
        Savings: Number(document.getElementById("Savings").value),
        Collateral_Value: Number(document.getElementById("Collateral_Value").value),
        Loan_Amount: Number(document.getElementById("Loan_Amount").value),
        Loan_Term: Number(document.getElementById("Loan_Term").value),
        Loan_Purpose: document.getElementById("Loan_Purpose").value,
        Property_Area: document.getElementById("Property_Area").value,
        Education_Level: document.getElementById("Education_Level").value,
        Gender: document.getElementById("Gender").value,
        Employer_Category: document.getElementById("Employer_Category").value
    };

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/predict",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const output = await response.json();

        // Save prediction temporarily
        sessionStorage.setItem(
            "loanPrediction",
            output.loan_prediction
        );

        // Open result page
        window.location.href = "result.html";

    } catch (error) {

        console.error(error);

        alert("Unable to connect to the CreditWise server.");

    }

});