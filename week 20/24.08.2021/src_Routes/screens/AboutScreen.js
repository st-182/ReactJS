import React, { useEffect } from "react";

const AboutScreen = () => {
  useEffect(() => {
    document.title = "React: About";
  }, []);
  return (
    <section>
      <h1>About</h1>
      <img
        src="https://media-assets-03.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-349138-meme7--default--1050.png"
        alt="Meme"
      />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero tempora
        cupiditate corrupti illum a obcaecati architecto nulla, voluptas
        perferendis eligendi, earum qui ratione autem! Architecto tempore
        assumenda ratione dicta in.
      </p>
    </section>
  );
};

export default AboutScreen;
