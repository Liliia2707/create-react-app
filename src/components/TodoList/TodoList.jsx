// import { useState } from "react";
import { Todo } from "../Todo/Todo";
import { toDos } from "../../utils/toDos";

export const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};
