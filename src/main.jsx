import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Categories from "./Categories.jsx";
// import Candidate from "./Candidates.jsx";
import CandidateList from "./CandidateList.jsx";
import AuthenticationPage from "./AuthenticationPage.jsx";
import CandidateForm from "./Pages/CandidateForm.jsx";
import ConfirmOTP from "./ConfirmOTP.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/candidatelist",
    element: <CandidateList />,
  },
  {
    path: "/authenticationpage",
    element: <AuthenticationPage />,
  },
  {
    path: "/candidateform",
    element: <CandidateForm />,
  },
  {
    path: "/confirmotp",
    element: <ConfirmOTP />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
