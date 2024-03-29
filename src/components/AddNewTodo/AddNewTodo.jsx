import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../store/todoSlice";

export const AddNewTodo = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      taskTitle,
      taskDescription,
      id: uuidv4(),
    };
    console.log(newTodo);

    dispatch(addTodo(newTodo));

    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="title"></label>
      <input
        type="text"
        id="title"
        value={taskTitle}
        onChange={(event) => setTaskTitle(event.target.value)}
      />
      <p>{taskTitle}</p>

      <label htmlFor="description"></label>
      <input
        type="text"
        id="description"
        value={taskDescription}
        onChange={(event) => setTaskDescription(event.target.value)}
      />
      <p>{taskDescription}</p>
      <button type="submit">Add Todo</button>
    </form>
  );
};
