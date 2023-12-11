import classes from "./Todo.module.css";

export const Todo = (props) => {
  const { taskTitle, taskDescripttion } = props;
  return (
    <div className={classes.todoContainer}>
      <h1>{taskTitle}</h1>
      <p>{taskDescripttion}</p>
    </div>
  );
};
