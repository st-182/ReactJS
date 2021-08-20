import React from "react";

const Card = ({ info }) => {
  return (
    <div className="item">
      <img src={info.img} alt="sasai" />
      <p>{info.text} a</p>
    </div>
  );
};

export default Card;
