import classes from "./post.module.css";

export const Post = ({ title, description, marked }) => {
  return (
    <div
      style={{ color: "blue" }}
      className={marked ? classes.marked : classes.postContainer}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

// ------------------------------------------------------

export const Post1 = (props) => {
  const { title, description } = props;
  return (
    <div style={{ color: "blue" }} className={classes.postContainer}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
