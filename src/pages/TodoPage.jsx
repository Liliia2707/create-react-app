import React from "react";
import { AddNewTodo } from "../components/AddNewTodo/AddNewTodo";
import { TodoList } from "../components/TodoList/TodoList";

export const TodoPage = () => {
  return (
    <div>
      <AddNewTodo />
      <TodoList />
    </div>
  );
};
