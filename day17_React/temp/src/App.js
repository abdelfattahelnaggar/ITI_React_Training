import React, { useState } from 'react';
import ShowButton from './components/ShowButton.js';
import HideButton from './components/HideButton.js';
import ToDoList from './components/ToDoList.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const [showTodos, setShowTodos] = useState(false);

  const toggleShowTodos = () => {
    setShowTodos(!showTodos);
  };

  return (
    <div className="App container mt-5 text-center">
      {!showTodos && (
        <div className="d-flex justify-content-center">
          <ShowButton toggleShowTodos={toggleShowTodos} />
        </div>
      )}
      {showTodos && (
        <div className="d-flex justify-content-center">
          <HideButton toggleShowTodos={toggleShowTodos} />
        </div>
      )}
      {showTodos && <ToDoList />}
    </div>
  );
}

export default App;
