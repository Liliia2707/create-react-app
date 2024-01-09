import React from "react";
import { useEffect, useState } from "react";
import { UserList } from "../components/UserList/UserList";
import { AddNewUser } from "../components/AddNewUser/AddNewUser";

const UserPage = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUserList(data.users.slice(0, 5));
    };
    fetchUsers();
  }, []);
  const addUserToList = (newUser) => setUserList([...userList, newUser]);
  return (
    <div>
      <AddNewUser addUserToList={addUserToList} />
      <UserList userList={userList} />
    </div>
  );
};

export default UserPage;
