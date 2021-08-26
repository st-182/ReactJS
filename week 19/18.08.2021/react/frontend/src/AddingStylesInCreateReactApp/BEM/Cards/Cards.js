import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ cardItemArray, sectionTitle }) => {
  return (
    <section className="cards-section">
      <h2 className="cards-section__title">{sectionTitle}</h2>
      <div className="cards-section__items">
        {cardItemArray.map((item) => (
          <Card item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
};

export default Cards;
