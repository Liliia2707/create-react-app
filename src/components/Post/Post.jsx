import classes from "./post.module.css";
import { changeColor } from "../../utils/сhangeColor";
import { useState } from "react";

// сипользуем useState
// слздать кнопку, которая будет менять цвет блока div
// style={{background: color}}
// в color задаем значение из useState
// setState - меняет цвет

export const Post = ({ title, text, img, marked, changeMarkedHandler }) => {
  const [color, setColor] = useState(changeColor);

  return (
    <div
      style={{ background: color }}
      className={marked ? classes.marked : classes.postContainer}
    >
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={img} alt="" />
      {/* <button onClick={() => setColor(changeColor)}>Change Color</button> */}
      <button onClick={changeMarkedHandler}>Marked</button>
    </div>
  );
};
