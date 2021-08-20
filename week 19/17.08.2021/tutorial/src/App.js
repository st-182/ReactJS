import React, { useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import "./components/Post.css";
import Button from "./components/UI/button/Button";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, name: "SOso", text: "I want some time)" },
    { id: 2, name: "Lol", text: "I want some time)" },
    { id: 3, name: "Lol", text: "I want some time)" },
    { id: 4, name: "Lol", text: "I want some time)" },
    { id: 5, name: "Lol", text: "I want some time)" },
    { id: 6, name: "Lol", text: "I want some time)" },
    { id: 7, name: "Lol", text: "I want some time)" },
    { id: 8, name: "Lol", text: "I want some time)" },
  ]);
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Post name" />
        <input type="text" placeholder="Text" />
        <input type="submit" value="Create post!" />
      </form>
      <Button />
      {posts.map((post) => (
        <Posts post={post} key={post.id} />
      ))}
    </div>
  );
}

export default App;
