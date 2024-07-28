import React, { useState } from 'react';
import ShowButton from './components/ShowButton.jsx';
import HideButton from './components/HideButton.jsx';
import ToDoList from './components/ToDoList.jsx';
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
