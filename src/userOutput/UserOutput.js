// jshint esversion: 6
import React from 'react';
import './userOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Username: {props.userName}</p>
      <p>I hope I will be overwritten!!!</p>
    </div>
  )
};

export default userOutput;