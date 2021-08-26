import React, { useRef } from "react";
import Button from "../Button/Button";
import "./Card.css";

const Card = ({ item }) => {
  const clickHandler = (e) => {
    console.log("clicked");
    buttonRef.current.classList.add("card_button--clicked");
  };
  const buttonRef = useRef();
  return (
    <div className="card">
      <h3 className="card__title">{item.title}</h3>
      <p className="card__content">{item.content}</p>
      <button className="card_button" onClick={clickHandler} ref={buttonRef}>
        {item.buttonText}
      </button>
    </div>
  );
};

export default Card;
