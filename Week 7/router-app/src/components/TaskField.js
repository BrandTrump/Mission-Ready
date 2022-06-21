import { useState } from "react";

const TaskField = () => {
  const [task, setTask] = useState("");

  const changeTask = (e) => setTask(e.target.value);
  const submitTask = (e) => {
    e.preventDefualt();
  };
  return (
    <div>
      <form onSubmit={submitTask} className="form-control">
        <label>Task</label>
        <input value={task} onChange={changeTask} />
        <button className="btn btn-block">Save Task</button>
      </form>
    </div>
  );
};

export default TaskField;
