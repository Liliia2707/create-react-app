import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AddNewUser = ({ addUserToList }) => {
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");

  const handleAddUser = (event) => {
    event.preventDefault();
    const newUser = {
      firstName: firstName,
      age: age,
      id: uuidv4(),
    };
    console.log(newUser);
    addUserToList(newUser);

    setFirstName("");
    setAge("");
  };

  return (
    <form onSubmit={handleAddUser}>
      <label htmlFor="name"></label>
      <input
        type="text"
        id="name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <p>{firstName}</p>

      <label htmlFor="age"></label>
      <input
        type="text"
        id="age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <p>{age}</p>
      <button type="submit">Add User</button>
    </form>
  );
};
