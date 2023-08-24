import { Link } from "react-router-dom";

const AuthenticationPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          Choose Authentication Method
        </h1>
        <div className="flex flex-col gap-4">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/categories">OTP Authentication</Link>
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Fingerprint Sensor Authentication
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
