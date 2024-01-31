import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeColor, resetColor } from "../store/colorSlice";
import { changeTheme } from "../store/themeSlice";
import classes from "./Header.module.css";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <button onClick={() => dispatch(changeTheme())}>change theme</button>
      <button onClick={() => dispatch(changeColor())}>change color</button>
      <button onClick={() => dispatch(resetColor())}>reset color</button>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/todos"
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ""
              }
            >
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ""
              }
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ""
              }
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
