import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";
import { Comments } from "./Comments";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Home() {
  const [comments] = useState("Test comment");
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  let [posts, setPosts] = useState([]);

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
    console.log(post);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPostsShowVisible(false);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  };

  // const handleCreatePost = (params) => {
  //   axios.post("http://localhost:3000/posts", params).then((response) => setPosts([...posts, response.data]));
  // };

  const handleUpdatePost = (id, params) => {
    axios.patch("http://localhost:3000/posts/" + id + ".json", params).then((response) => {
      console.log(response.data);
      setIsPostsShowVisible(false); // hide modal
      setPosts(
        posts.map((post) => {
          if (post.id === id) {
            //update matching id, otherwise do nothing
            return response.data;
          } else {
            return post;
          }
        })
      );
    });
  };

  const handleDestroyPost = (post) => {
    console.log("handleDestroyPost", post);
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleClose();
    });
  };

  useEffect(handleIndexPosts, []);
  return (
    <div>
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPhoto={handleDestroyPost} />
      </Modal>
      <Comments comments={comments} />
    </div>
  );
}
