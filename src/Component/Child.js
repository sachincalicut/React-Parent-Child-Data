import React from 'react';

const Child = (props) => {
  return (
    <div className="box">
      <div>
        <strong>
          Welcome&nbsp;&nbsp;{props.name}, {props.channel}
        </strong>
      </div>
      <button onClick={() => props.setName('Rahul')}>Click here</button>
    </div>
  );
};
export default Child;
