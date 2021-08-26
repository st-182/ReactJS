import React, { useEffect } from "react";
import cats from "./HomeScreen.module.css";

const HomeScreen = () => {
  useEffect(() => {
    document.title = "React: Home";
    console.log(cats);
  }, []);
  return (
    <section className={cats.home}>
      <div>
        <h1 className={cats.h2Element}>Rivile GAMA</h1>
        <p className={cats.pElement}>
          Labai populiari buhalterinės apskaitos, finansų ir verslo valdymo
          sistema augti norinčiam verslui.
        </p>
        <div className={cats.home}>
          <button className={cats.button}>Išbandyti nemokamai </button>
          <button className={cats.button}>Išmokti nemokamai</button>
        </div>
        <div className={cats.home}>
          <a href="#to" className={cats.a}>
            Konsultacija įsigijimui
          </a>
          <a href="#to" className={cats.a}>
            Konsultacija nuomai
          </a>
        </div>
      </div>
      <div className="home-image">
        <img
          className={cats.img}
          src="https://www.rivile.lt/wp-content/uploads/Rivile-%C4%AFranginiai.png"
          alt="React"
        />
      </div>
    </section>
  );
};

export default HomeScreen;
