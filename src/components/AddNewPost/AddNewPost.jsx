import { useContext, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import { ApiContext } from "../../contexts";

export const AddNewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { handlePostedData } = useContext(ApiContext);

  const handleAddPost = (event) => {
    event.preventDefault();
    const newPost = {
      title: title,
      body: body,
      userId: 5,
    };
    console.log(newPost);
    handlePostedData(newPost);

    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleAddPost}>
      <label htmlFor="title"></label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <p>{title}</p>

      <label htmlFor="body"></label>
      <input
        type="text"
        id="body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />
      <p>{body}</p>
      <button type="submit">Add Post</button>
    </form>
  );
};
