import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  function click() {
    setCount(count + 1);
  }
  return <button onClick={click}>You pressed me {count} times</button>;
}
