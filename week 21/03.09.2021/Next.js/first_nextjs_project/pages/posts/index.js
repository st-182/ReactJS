import React from "react";
import Posts from "../../components/UserInterface/Posts";

const index = ({ data }) => {
  return (
    <>
      <h1>Posts</h1>
      <Posts data={data} />
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      data: data.slice(0, 5),
    },
  };
};
