import React, { useState, useEffect } from "react";
import CounterButton from "../Hooks/CounterButton";

const Counter = ({ cartCount, priceBasedOnSize, setCartItem }) => {
  //state
  const [count, setCount] = useState(cartCount);
  // const [message, setMessage] = useState("");

  //side effects (mounting updating, unmount)
  let num = 0;
  useEffect(() => {
    // console.log(`one`, num++);
  }, []);

  //functions
  const increment = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  // const showGreeting = () => {
  //   setMessage("AHAHHAHAHAHAHAHAHHA");
  // };
  console.log(priceBasedOnSize);
  return (
    <div className="button-add-to-cart">
      <div className="count-cart">
        <CounterButton text="-" action={decrement} />
        <p>{count}</p>
        <CounterButton text="+" action={increment} />
      </div>
      <button className="button " onClick={() => setCartItem(count)}>
        Add to cart
      </button>
      {/* <p>{message}</p> */}
      {/* <CounterButton text="-Show Greeting" action={showGreeting} /> */}
    </div>
  );
};

export default Counter;
