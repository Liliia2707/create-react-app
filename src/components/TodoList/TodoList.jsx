import { useState } from "react";
import { todos } from "../../utils/toDos";
import { Todo } from "../Todo/Todo";

export const TodoList = () => {
  const [todoList, setTodotList] = useState(todos);
  console.log(todoList);
  const changeDoneFlagHandler = (id) => {
    // пройтись по массиву состояния, todoList
    // проходимся по массиву (map)
    // проверяем id элемента с id функции
    // если id совпадает, меняем на противоположный, если нет, возвращаем объект
    // результат заносим в переменную newtodolist
    // используя функцию изменения состояния, меняем состояние на новый массив
    const newtodolist = todoList.map((todo) =>
      todo.id === id ? { ...todo, doneFlag: !todo.doneFlag } : todo
    );
    setTodotList(newtodolist);
  };

  return (
    <div>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          changeDoneFlagHandler={() => changeDoneFlagHandler(todo.id)}
        />
      ))}
    </div>
  );
};
