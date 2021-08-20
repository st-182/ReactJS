import React from "react";
import Card from "./Card";

const Portfolio = () => {
  let cards = [
    {
      img: "https://i.ytimg.com/vi/erletSWLPaA/maxresdefault.jpg",
      text: "One Two",
    },
    {
      img: "https://steamuserimages-a.akamaihd.net/ugc/759346451806641264/682D0C8E795FBCCD9D41DE890A79C1CE5DCB5E5C/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
      text: "One Two",
    },
    {
      img: "https://cdn131.picsart.com/294840203140211.png?type=webp&to=min&r=640",
      text: "One Two",
    },
    {
      img: "https://img-comment-fun.9cache.com/media/aDzEW99/alzbdWzR_700w_0.jpg",
      text: "One Two",
    },
    {
      img: "https://steamuserimages-a.akamaihd.net/ugc/787482440463232773/6CC0D9183763A5F704859546BEF9CB9E7E559324/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      text: "One Two",
    },
    {
      img: "https://cs1.gtaall.com/screenshots/4dc09/2018-12/original/16641581107a13a39a6011b85af41b86dc0701f2/702735-gta-sa-2018-12-21-20-29-04-09-result.jpg",
      text: "One Two",
    },
  ];

  return (
    <div className="portfolio">
      <h2 className="">Portfolio</h2>
      <p>
        Quickly and simply build a personalized website to showcase your
        creative work with Adobe Portfolio. Now included free with any Creative
        Cloud subscription.
      </p>
      <div className="grid">
        {cards.map((card) => (
          <Card info={card} />
        ))}
      </div>
    </div>
  );
  //   componentDidMount() {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((data) => this.setState({ users: data }));
  //   }
};

export default Portfolio;
