import React from 'react';

const ShowButton = ({ toggleShowTodos }) => {
  return (
    <button 
      onClick={toggleShowTodos} 
      className="btn btn-primary btn-lg my-3"
      style={{ minWidth: '150px' }}
    >
      Show 
    </button>
  );
};

export default ShowButton;
