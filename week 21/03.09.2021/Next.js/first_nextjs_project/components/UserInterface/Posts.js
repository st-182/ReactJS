import React from "react";
import Post from "./Post";
import style from "../../styles/Post.module.css";

const Posts = ({ data }) => {
  return (
    <>
      <h3>Posts</h3>
      <div className={style.output}>
        {data.map((item) => (
          <Post item={item} />
        ))}
      </div>
    </>
  );
};

export default Posts;

//getting data from API
