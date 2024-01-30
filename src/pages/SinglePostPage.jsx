import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../requests";

const SinglePostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchSinglePost(id, setPost);
  }, [id]);
  console.log(post);
  return (
    <div>
      <p>{post && post.title}</p>
      <p>{post && post.body}</p>
    </div>
  );
};

export default SinglePostPage;
