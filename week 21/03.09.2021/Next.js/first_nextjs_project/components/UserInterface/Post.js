import React from "react";
import style from "../../styles/Post.module.css";

const Post = ({ item }) => {
  return (
    <div key={item.id} className={style.item}>
      <h4>{item.title}</h4>
      <p>{item.body}</p>
    </div>
  );
};

export default Post;
