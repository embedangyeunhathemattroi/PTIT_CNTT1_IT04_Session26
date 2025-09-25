import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CounterB3() {
  const counter = useSelector((state: any) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Giá trị Counter: {counter}</h2>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        style={{ marginRight: "10px", padding: "8px 16px" }}
      >
        Tăng +
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        style={{ padding: "8px 16px" }}
      >
        Giảm -
      </button>
    </div>
  );
}
