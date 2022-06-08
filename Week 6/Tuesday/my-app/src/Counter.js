import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(100);

  useEffect(() => {
    console.log(`the count is at ${count}`);
  });

  function updateCount(type) {
    type === "subtract" ? setCount(count - 1) : setCount(count + 1);
  }
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => updateCount("add")}>Add Count</button>
      <button onClick={() => updateCount("subtract")}>subtract Count</button>
    </div>
  );
}
