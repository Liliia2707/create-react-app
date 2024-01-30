import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleUser } from "../requests";

const SinglUserPage = () => {
  const [user, setUser] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetchSingleUser(id, setUser);
  }, [id]);
  console.log(user);
  return <div>{user && user.firstName}</div>;
};

export default SinglUserPage;
