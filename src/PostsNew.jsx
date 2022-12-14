import axios from "axios";
import { useState } from "react";

export function PostsNew() {
  const [errors, setErrors] = useState([]);

  const handleNewPost = (event) => {
    event.preventDefault();
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/posts", params)
      .then((response) => {
        event.target.reset();
        window.location.href = "/";
      })
      .catch((errors) => {
        setErrors(errors.response.data.errors);
      });
  };
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
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
