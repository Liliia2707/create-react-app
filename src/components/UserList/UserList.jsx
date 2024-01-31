import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFriend, deleteFriend } from "../../store/friendsSlice";
import { User } from "../User/User";

export const UserList = ({ userList }) => {
  const dispatch = useDispatch();
  const handleAddUser = (event, user) => {
    event.preventDefault();
    dispatch(addFriend(user));
    console.log(user);
  };
  const handleDeleteUser = (event, user) => {
    event.preventDefault();
    dispatch(deleteFriend(user));
    console.log(user);
  };
  return (
    <div>
      {userList.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <User
            {...user}
            handleAddUser={(event) => handleAddUser(event, user)}
            handleDeleteUser={handleDeleteUser}
          />
        </Link>
      ))}
    </div>
  );
};
