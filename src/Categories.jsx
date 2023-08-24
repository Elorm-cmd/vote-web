import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <Link
        to="/candidatelist"
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded m-2"
      >
        President
      </Link>

      <button className=" bg-blue-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded m-2">
        Vice President
      </button>
      <button className=" bg-blue-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded m-2">
        General Secretary
      </button>
      <button className=" bg-blue-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded m-2">
        {" "}
        Financial Secretary
      </button>
    </div>
  );
};

export default Categories;
