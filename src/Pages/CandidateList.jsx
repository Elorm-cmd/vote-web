import { useState, useEffect } from "react";

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Fetch candidate details from the endpoint
    fetch("https://georgette-backend.onrender.com/candidates_by_role")
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((error) => console.error("Error fetching candidates:", error));
  }, []);

  const handleVote = (candidateId) => {
    // Handle the vote logic for the selected candidate
    console.log(`Vote for candidate with ID ${candidateId}`);
  };

  return (
    <div className="flex flex-col items-center">
      {candidates.map((candidate) => (
        <div
          key={candidate.id}
          className="mb-4 p-4 border border-gray-300 rounded-lg"
        >
          <h3 className="text-xl font-bold">{candidate.name}</h3>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={() => handleVote(candidate.id)}
          >
            Vote
          </button>
        </div>
      ))}
    </div>
  );
};

export default CandidateList;
