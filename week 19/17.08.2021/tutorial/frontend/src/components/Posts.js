import React from "react";

const Posts = (props) => {
  return (
    <div className="posts">
      <p>{props.post.id}</p>
      <strong>{props.post.name}</strong>
      <p>{props.post.text}</p>
    </div>
  );
};

export default Posts;
