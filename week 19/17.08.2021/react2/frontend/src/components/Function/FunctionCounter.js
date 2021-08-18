import React from "react";

const Greeting = ({ name, surname }) => {
  return (
    <div>
      <h1>
        Welcome {name} {surname} to my app!
      </h1>
    </div>
  );
};

export default Greeting;
