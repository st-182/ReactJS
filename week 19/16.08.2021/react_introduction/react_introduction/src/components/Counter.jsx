import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  let style = {
    background: "white",
    color: "red",
  };

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button style={style} onClick={increment}>
        increment
      </button>
      <button style={style} onClick={decrement}>
        decrement
      </button>
    </div>
  );
};
export default Counter;
