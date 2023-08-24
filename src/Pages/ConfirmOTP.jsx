import { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmOTP = () => {
  const [otp, setOTP] = useState("");

  const handleVerifyOTP = async (e) => {
    // Replace this with your actual OTP verification logic
    e.preventDefault();

    const formData = {
      otp,
    };

    try {
      const response = await fetch(
        " https://georgette-backend.onrender.com/confirm_otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset form fields if needed
        setOTP("https://georgette-backend.onrender.com/confirm_otp");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">OTP Verification</h1>
        <div className="mb-4">
          <form onSubmit={handleVerifyOTP} action="POST">
            <label htmlFor="otp">Enter OTP:</label>
            <input
              type="text"
              pattern="[0-9]{6}"
              maxLength="6"
              placeholder="Enter 6-digit OTP"
              className="border rounded py-2 px-3 w-full"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
          </form>
        </div>
        <Link to="/categories">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={handleVerifyOTP}
            type="submit"
          >
            Verify OTP
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmOTP;
