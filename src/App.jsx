import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for styling
import "./App.css"; // Custom CSS file
import { validateForm } from "./FormValidation"; // Custom form validation function

function App() {
  // 🎯 React state hooks
  const [email, setEmail] = useState(""); // Store email input
  const [password, setPassword] = useState(""); // Store password input
  const [error, setError] = useState(""); // Store validation error message
  const [successMessage, setSuccessMessage] = useState(""); // Show success alert

    // 🔁 Form submit handler
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form reload
      const validationError = validateForm(email, password); // Validate inputs
  
      if (validationError) {
        setError(validationError); // Show error if validation fails
        setSuccessMessage(""); // Clear success message
      } else {
        setError(""); // Clear error message
        setSuccessMessage("🎉 You’ve logged in successfully. Let’s get started!"); // Show success
        setTimeout(() => setSuccessMessage(""), 3000); // Auto-hide after 3 sec
        setPassword(""); // Optional: clear password
      }
    };
    // 🧱 UI Part
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div
          id="main-container"
          className="p-4 shadow rounded w-100"
          style={{ maxWidth: "400px" }}
        >
        {/* ✅ Success alert box */}
        <div
          className={`alert alert-success text-center p-2 mb-3 ${
            successMessage ? "show" : ""
          }`}
        >
          {successMessage}
        </div>

        {/* 📝 Title */}
        <h2 className="text-center fs-4">
        Sign in to continue with Google or email
        </h2>

        {/* 🟢 Google button */}
        <button
          id="google"
          className="btn btn-success w-100 mt-4 fs-5"
          style={{
            background: "none",
            color: "black",
            border: "1px solid black",
          }}
        >
          <img
            src="./public/google.png"
            alt="#"
            style={{ width: "5%", height: "2%" }}
            className="align-items-center mb-1 me-2"
          />
          Continue with Google
        </button>

        <p className="mt-3 mb-3 text-center">or</p>

        {/* ✉️ Email/Password Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            className="w-100 p-3 rounded"
            style={{ border: "none", background: "#00000014", color: "black" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            className="w-100 p-3 mt-2 rounded"
            style={{ border: "none", background: "#00000014", color: "black" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {/* ❌ Error message */}
          {error && <p className="text-danger mt-2">{error}</p>}

                    {/* 🔘 Submit Button */}
                    <button
            id="submit"
            type="submit"
            className="btn btn-dark w-100 mt-4 p-2 fs-5"
          >
            Continue with email
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;



