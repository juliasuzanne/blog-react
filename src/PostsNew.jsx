import { useState } from "react";

export function PostsNew(props) {
  const handleNewPost = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };
  return (
    <div id="posts-new">
      <h1>New post</h1>
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
