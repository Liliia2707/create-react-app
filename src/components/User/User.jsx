// создать карточку юзера
// чтобы отображала - firstName, age, gender, username, image

export const User = ({ firstName, age, gender, username, image }) => {
  return (
    <div>
      <p>{firstName}</p>
      <p>{age}</p>
      <p>{gender}</p>
      <p>{username}</p>
      <img src={image} alt={username} />
    </div>
  );
};
