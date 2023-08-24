import thumbsUp from "./assets/thumbs-up.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Instructions from "./Instructions";
import AppNavBar from "./AppNavBar";

function App() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      phoneNumber,
    };

    try {
      const response = await fetch(
        " https://georgette-backend.onrender.com/send_otp ",
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
        setName("");
        setPhoneNumber("");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Instructions />
      <div className="w-1/2 h-screen absolute top-0 left-1/2 flex flex-col items-center overflow-hidden">
        <AppNavBar />
        <img src={thumbsUp} className="rounded-full h-14 w-14 mt-16"></img>
        <p className=" text-3xl mt-8 font-bold">Welcome!</p>
        <form onSubmit={handleSubmit} className=" flex flex-col mt-10 w-4/5">
          <label htmlFor="name" className="text-xs mt-5">
            Full Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="h-12 bg-[#F1F6FA]
            value={name}
            onChange={(e) => setName(e.target.value)}"
          />
          <label htmlFor="phoneNumber" className="text-xs mt-5">
            Phone Number:
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="h-12 bg-[#F1F6FA]
            value ={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}"
          />
          <button type="submit">Submit</button>
        </form>

        <div className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full m-4">
          <Link to="/confirmotp">Confirm OTP</Link>
        </div>

        <div className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full m-4">
          <Link to="/authenticationpage">Authentication Page</Link>
        </div>

        <div className=" bg-purple-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full m-4">
          <Link to="/candidateform">Enrol New Candidate</Link>
        </div>

        <div className="absolute bottom-0 text-center my-2 text-xs">
          <p>
            {"Don't have an account yet? "}
            <a href="#" className="text-[#7FB494]">
              Sign Up
            </a>
            <Link to="/signup"> Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
