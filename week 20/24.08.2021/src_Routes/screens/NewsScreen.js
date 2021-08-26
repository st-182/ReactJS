import React, { useEffect, useState } from "react";
import newsMeme from "../assets/newsMeme.jpeg";

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    document.title = "React: News";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <section>
      <h1>News</h1>
      <img src={newsMeme} alt="Meme" className="news-img" />
      {news.length === 0 ? (
        <p>Loading</p>
      ) : (
        <section className="grid">
          {news.map((item) => (
            <article className="item">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </section>
      )}
    </section>
  );
};

export default NewsScreen;
