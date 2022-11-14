import { useState } from "react";

const useCounter = (initialValue = "0") => {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue((c) => c + 1);
  const decrement = () => setValue((c) => c - 1);
  const reset = () => setValue(initialValue);

  return { value, increment, decrement, reset };
};
export default function CustomCounter() {
  const { value, increment, decrement, reset } = useCounter();

  return (
    <div style={{ display: "flex" }}>
      <button onClick={decrement}>-</button>
      <h1>{value}</h1>
      <button onClick={increment}>+</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}