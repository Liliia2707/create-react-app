import React from "react";
import { useState } from "react";
import { TodoList } from "../components/TodoList/TodoList";
import { todos } from "../utils/toDos";
import { AddNewTodo } from "../components/AddNewTodo/AddNewTodo";

export const TodoPage = () => {
  const [todoList, setTodoList] = useState(todos);
  const addTodoToList = (newTodo) => setTodoList([...todoList, newTodo]);
  return (
    <div>
      <AddNewTodo addTodoToList={addTodoToList} />
      <TodoList todoList={todoList} />
    </div>
  );
};
