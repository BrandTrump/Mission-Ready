import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const updateCount = () => setCount(count + 1);
  return (
    <div>
      <Counter count={count} updateCount={updateCount}></Counter>
      <Counter count={count} updateCount={updateCount}></Counter>
    </div>
  );
}

export default App;
