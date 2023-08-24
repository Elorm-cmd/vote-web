const Instructions = () => {
  return (
    <div className="w-1/2 h-screen absolute top-0 left-0 bg-[#7FB494] text-white flex flex-col space-y-6">
      <h1 className="mx-auto text-2xl font-bold my-10">How to Vote?</h1>
      <p className="mx-4">
        <strong>Step 1:</strong> Type in your username and password.
      </p>
      <p className="mx-4">
        <strong>Step 2:</strong> Select biometric authentication if you are
        voting from a polling station. You would then be authenticated by
        placing your finger on a biometric sensor. After which you can proceed
        to vote.
      </p>
      <p className="mx-4">
        <strong>Step 3:</strong> If you’re voting from your home select OTP
        authentication, a one time password would then be sent to your phone
        number as a text message. Input the one time password to be
        authenticated then proceed with voting.
      </p>
    </div>
  );
};

export default Instructions;
