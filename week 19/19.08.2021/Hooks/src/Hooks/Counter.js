import React, { useState } from "react";
import CounterButton from "../Hooks/CounterButton";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const showGreeting = () => {
    setMessage("AHAHHAHAHAHAHAHAHHA");
  };
  return (
    <div>
      <h2>Counter 1</h2>
      <p>Count: {count}</p>
      <CounterButton text="+1" action={increment} />
      <CounterButton text="-1" action={decrement} />
      <p>{message}</p>
      <CounterButton text="-Show Greeting" action={showGreeting} />
    </div>
  );
};

export default Counter;
