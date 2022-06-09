import { useState } from "react";

export default function ColorDiv() {
  const [color, setColor] = useState("yellow");

  function changeColor() {
    switch (color) {
      case "yellow":
        setColor("blue");
        break;
      case "blue":
        setColor("green");
        break;
      case "green":
        setColor("orange");
        break;
      case "orange":
        setColor("purple");
        break;
      default:
        setColor("yellow");
    }
  }

  return (
    <div>
      <h1 style={{ background: color }}>
        This element is going to change color
      </h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}
