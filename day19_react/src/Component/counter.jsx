import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  let increaseHandler = (x) => {
    setCount(count + 1);
    console.log("Count: ", count, " ", x);
  }
  let decreaseHandler = () => {
    setCount(count - 1)
  }
  return (
    <div className='alert alert-dark mx-5 p-5'>
      <div className="container">
        <h1>Counter Component</h1>
        <p className='lead'>Count : <strong className='text-danger'>{count}</strong></p>
        <div className='container d-flex justify-content-evenly '>
          <button onClick={() => increaseHandler('abdo')} className='btn btn-success p-3'>Increase</button>
          <button onClick={decreaseHandler} className='btn btn-danger p-3'>Decrease</button>
        </div>
      </div>
      
    </div>
  )
}

export default Counter