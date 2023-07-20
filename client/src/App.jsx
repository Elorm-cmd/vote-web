import Navbar from "./Navbar";
import ProfileDetails from "./ProfileDetails";
import Candidates from "./Candidates";

function App() {
  return (
    <div className="bg-[#002071] flex h-screen overflow-hidden">
      <Navbar />
      <div className="h-screen container flex justify-center mt-8 w-3/4 mx-1 rounded-lg">
        <div className=" container h-full">
          <div className=" container w-full">
            <div className="bg-white rounded-lg p-4">
              <ProfileDetails />
              <div className="h-16"></div>
              <Candidates />
              <div className="flex justify-center mt-4">
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg">
                  Cast Your Vote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
