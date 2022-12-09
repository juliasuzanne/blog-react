import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";
import { Comments } from "./Comments";
import { PostsIndex } from "./PostsIndex";

export function Home() {
  const [comments] = useState("Test comment");
  let [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
      <Comments comments={comments} />
    </div>
  );
}
