import { useEffect, useState } from "react";
import { User } from "../User/User";

export const UserList = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUserList(data.users);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      {userList.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
};
