import React, { useState } from "react";

const MoodChecker = () => {
  const [message, setMessage] = useState("Kaip jaučiatės?");
  return (
    <div>
      <h2>{message}</h2>
      <button
        className="button"
        onClick={() => setMessage("Nieko tokio, viskas bus gerai")}
      >
        1. Jaučiuosi prastai :(
      </button>
      <button
        className="button"
        onClick={() =>
          setMessage("Gerai, nujaučiu, kad greitu metu jausitės puikiai")
        }
      >
        2. Jaučiuosi normaliai :|
      </button>
      <button
        className="button"
        onClick={() => setMessage("Smagu girdėti, taip ir toliau")}
      >
        3. Jaučiuosi puikiai :)
      </button>
    </div>
  );
};

export default MoodChecker;
