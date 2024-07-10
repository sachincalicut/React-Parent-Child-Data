import React, { useState } from 'react';
import Child from './Child';
const Parent = () => {
  const [screening, setScreening] = useState('Sachin Chanduveettil');
  return (
    <div className="box">
      <strong>Hello</strong>
      <Child name={screening} setName={setScreening} />
    </div>
  );
};
export default Parent;
