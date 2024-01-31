import { useDispatch, useSelector } from "react-redux";

export const User = ({
  id,
  firstName,
  age,
  gender,
  username,
  image,
  handleAddUser,
  handleDeleteUser,
}) => {
  const color = useSelector((state) => state.color.color);
  const dispatch = useDispatch();
  return (
    <div style={{ background: color }}>
      <button onClick={handleAddUser}>add friend</button>
      <button onClick={handleDeleteUser}>delete friend</button>
      <p>{firstName}</p>
      <p>{age}</p>
      <p>{gender}</p>
      <p>{username}</p>
      <img src={image} alt={username} />
    </div>
  );
};
