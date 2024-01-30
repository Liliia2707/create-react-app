import { useDispatch, useSelector } from "react-redux";
import {
  change_by_value,
  decrease,
  increase,
  reset,
} from "../../store/counterSlice";

export const Counter = () => {
  //позволяет получить значение из store
  //в качесвте параментров принимает только функцию
  const counter = useSelector((store) => store.counter.counter);

  const action = {
    type: "TYPE",
    payload: "OPTOINAL",
  };

  const dispatch = useDispatch();
  console.log(counter);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(change_by_value(5))}>+5</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </div>
  );
};
