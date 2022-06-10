import Car from "./Car";
import Fruits from "./Fruits";
import User from "./User";
import Person from "./Person";
import Counter from "./Counter";
import ColorDiv from "./ColorDiv";
import FormExample from "./FormExample";
import TernaryShowHide from "./TernaryShowHide";
import LogicalAnd from "./LogicalAnd";
import MainBranch from "./MainBranch";

function App() {
  return (
    <div>
      <Car carName="Toyota" />
      <br />
      <Fruits></Fruits>
      <br />
      <User></User>
      <br />
      <Person name="Mike" age="26"></Person>
      <Counter></Counter>
      <ColorDiv></ColorDiv>
      <br />
      <FormExample></FormExample>
      <br />
      <TernaryShowHide></TernaryShowHide>
      <br />
      <br />
      <LogicalAnd></LogicalAnd>
      <br />
      <MainBranch></MainBranch>
    </div>
  );
}

export default App;
