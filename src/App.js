import { useEffect, useState } from "react";
import { PostList } from "./components/PostList/PostList";
import { TodoList } from "./components/TodoList/TodoList";
import { UserList } from "./components/UserLisr/UserList";
import { Product } from "./components/Product/Product";

function App() {
  const [value, setValue] = useState(Number(localStorage.getItem("item")) ?? 0);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    console.log("only for counter");
    localStorage.setItem("item", value);
  }, [value]);

  return (
    <div className="App">
      <Product />
      <UserList />

      <div>
        <p>{value}</p>
        <button onClick={() => setValue(value + 1)}>Click</button>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle ? "a" : "b"}
      </div>
    </div>
  );
}

export default App;

