import React from 'react';

const HideButton = ({ toggleShowTodos }) => {
  return (
    <button 
      onClick={toggleShowTodos} 
      className="btn btn-lg btn-danger btn-lg my-3"
      style={{ minWidth: '150px' }}
    >
      Hide 
    </button>
  );
};

export default HideButton;
