import { Outlet } from "react-router-dom";
import { Header } from "./Layout/Header";
import { Counter } from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Outlet />
    </div>
  );
}

export default App;
