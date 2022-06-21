import { useState } from "react";

import InputComponent from "./components/InputComponents";
import ShowInput from "./components/ShowInput";
import Counter from "./components/Counter";

function App() {
  const [val, setVal] = useState("");
  const handleInputChange = (e) => setVal(e.target.value);

  const [count, setCount] = useState(0);
  const updateCount = () => setCount(count + 1);

  return (
    <div style={{ border: "2px solid red", margin: "5px", padding: "2px" }}>
      {/*orange component  */}
      <InputComponent
        val={val}
        handleInputChange={handleInputChange}
      ></InputComponent>
      <br />
      {/*green component */}
      <ShowInput val={val}></ShowInput>

      <Counter count={count} updateCount={updateCount}></Counter>
      <Counter count={count} updateCount={updateCount}></Counter>
    </div>
  );
}

export default App;
