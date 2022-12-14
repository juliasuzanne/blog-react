export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
  };

  return (
    <div>
      <h1>{props.post.title}</h1>
      <img src={props.post.image} width="50"></img>
      <p>{props.post.body}</p>

      <h1>Edit post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title:
          <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Body:
          <input name="body" defaultValue={props.post.body} type="text" />
        </div>
        <div>
          Image:
          <input name="image" defaultValue={props.post.image} type="url" />
        </div>
        <button type="submit">Submit Edits</button>
      </form>
    </div>
  );
}
