// jshint esversion: 6
import React from 'react';


const userInput = (props) => {
  const inputStyle = {
    border: '2px solid red'
  }
  return (
    <input 
      type="text" 
      onChange={props.changed} 
      value={props.currentValue} 
      style={inputStyle} />
  )
};

export default userInput;