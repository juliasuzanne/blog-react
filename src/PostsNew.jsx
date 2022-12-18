import { useState } from "react";
import axios from "axios";

export function PostsNew() {
  const [errors, setErrors] = useState([]);
  const handleNewPost = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreatePost(params);
    event.target.reset();
  };

  const handleCreatePost = (params) => {
    axios
      .post("http://localhost:3000/posts", params)
      .then((window.location.href = "/"))
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
      ;
      <form onSubmit={handleNewPost}>
        <div>
          Title:
          <input name="title" type="text" />
        </div>
        <div>
          Body:
          <input name="body" type="text" />
        </div>
        <div>
          Image:
          <input name="image" type="url" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
