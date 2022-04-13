import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
// import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex align-middle">
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>

        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <br />
      </div>
    </div>
  );
}
