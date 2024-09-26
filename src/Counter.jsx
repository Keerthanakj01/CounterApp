import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <p className="p">Counter </p>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="counter1">
        <p className="p1">Count: {count}</p>
        <p className="p1">{count === 10 && <p>You've reached 10!</p>}</p>
      </div>
    </div>
  );
}
