import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function PostsShowPage() {
  const [post, setPost] = useState({});
  const params = useParams();

  const handleShowRecipe = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  };

  useEffect(handleShowRecipe, []);

  return (
    <div className="show">
      <h1>{post.title}</h1>
      <img src={post.image} width="500"></img>
      <p>{post.body}</p>
    </div>
  );
}
