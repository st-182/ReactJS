import React from "react";

const InfoHero = ({ title, subtitle }) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default InfoHero;
