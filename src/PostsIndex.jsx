import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  console.log(props.posts);
  return (
    <div id="posts-index">
      Search Filter:
      <input
        className="container"
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      />
      {props.posts
        .filter((posts) => posts.body.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
          <div key={post.id} id="post">
            <h2>{post.title}</h2>
            <img src={post.image} alt="" />
            <p> {post.body}</p>
            <button onClick={() => props.onSelectPost(post)}>More Info</button>
          </div>
        ))}
    </div>
  );
}
