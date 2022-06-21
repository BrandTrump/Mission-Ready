import "./App.css";
import Header from "./components/Header";
import TaskField from "./components/TaskField";
import TaskList from "./components/TaskList";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import Post from "./pages/Post";
// import Book from "./pages/Book";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [tasksArray, setTasksArray] = useState([]);

  const addTaskToArray = (task) => {
    setTasksArray([...tasksArray, task]);
  };

  const deleteTaskFormArray = (tasksToDelete) => {
    setTasksArray(tasksArray.filter((task) => task !== tasksToDelete));
  };
  return (
    <div className="container">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/post/:postID" element={<Post />} />
          <Route path="/books/:bookID" element={<Book />} />
        </Routes>
      </BrowserRouter> */}

      <Header />
      <TaskField addTaskToArray={addTaskToArray} />
      <TaskList
        tasksArray={tasksArray}
        deleteTaskFormArray={deleteTaskFormArray}
      />
    </div>
  );
}

export default App;
