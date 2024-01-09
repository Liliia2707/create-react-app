// import { useState } from "react";
// import classes from "./Todo.module.css";

export const Todo = ({
  taskTitle,
  taskDescription,
  doneFlag,
  changeDoneFlagHandler,
}) => {
  // const [value, setValue] = useState(0);

  return (
    // <div
    //   style={{ textDecoration: doneFlag ? "line-through" : "none" }}
    //   className={`container ${classes.todoContainer}`}
    // >
    <div>
      <h1>{taskTitle}</h1>
      <p>{taskDescription}</p>
      {/* <h2>{value}</h2> */}
      {/* <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
      <button onClick={() => setValue(0)}>reset</button>
      <button onClick={changeDoneFlagHandler}>toggle</button> */}
    </div>
  );
};
