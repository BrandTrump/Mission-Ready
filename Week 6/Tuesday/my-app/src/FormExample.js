import { useState } from "react";

export default function FormExample() {
  const [input, setInput] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    const updatedData = [...submittedData, input];
    setSubmittedData(updatedData);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <div>
          <input type="text" onChange={handleChange}></input>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submittedData.map((input) => (
        <li>{input}</li>
      ))}
    </div>
  );
}
