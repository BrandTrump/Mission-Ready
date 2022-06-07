import Car from "./Car";
import Fruits from "./Fruits";
import User from "./User";
import Person from "./Person";

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
    </div>
  );
}

export default App;
