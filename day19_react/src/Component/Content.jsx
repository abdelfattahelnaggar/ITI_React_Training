import React from 'react';

function Content(props) {
  let { objectData } = props;
  let { bgColor, trackName, instName } = objectData;
  return (
    <div className={`${bgColor} p-5`}>
      <h1 className='mb-4'>{trackName} track</h1>
      <p className='lead'><strong className='text-danger'> {instName} </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quos maiores, enim eos laboriosam quidem officia facere dolorum repellendus saepe quibusdam quam tenetur rerum itaque autem nulla, dignissimos nemo incidunt.</p>
      {props.children }
    </div>
  )
}

export default Content