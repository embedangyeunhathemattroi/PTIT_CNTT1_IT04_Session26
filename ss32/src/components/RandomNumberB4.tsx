import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RandomNumber() {
  const numbers = useSelector((state: any) => state.random.numbers);
  const dispatch = useDispatch();

  const handleGenerate = () => {
    const newNumber = Math.floor(Math.random() * 100); // random 0-99
    dispatch({ type: "ADD_RANDOM", payload: newNumber });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{JSON.stringify(numbers)}</h2>
      <button onClick={handleGenerate} style={{ padding: "8px 16px" }}>
        Generate Random Number
      </button>
    </div>
  );
}
