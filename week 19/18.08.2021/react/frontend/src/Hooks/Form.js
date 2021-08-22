import React, { useEffect, useRef, useState } from "react";

const Form = () => {
  //Hooks

  //-state
  //--form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  //--message
  const [message, setMessage] = useState("");

  //-side effects
  useEffect(() => {
    focusInput.current.focus();
    console.log(hasCar);
  }, []);

  //-refs
  const focusInput = useRef();
  const hasCar = useRef(true);
  // Custom functions
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, age);
    name === ""
      ? setMessage("Enter name to submit, plz.")
      : email.length <= 5
      ? setMessage("Enter email plz")
      : age < 16
      ? setMessage("Enter your real age plz")
      : age > 110
      ? setMessage("Enter your real age plz")
      : setMessage("Success!");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          ref={focusInput}
        />
        <label htmlFor="email">Email</label>
        <input type="Email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="age">Age</label>
        <input type="number" onChange={(e) => setAge(e.target.value)} />
        <input type="submit" value="Submit!" />
      </form>
      <p>{message}</p>
    </>
  );
};

export default Form;
