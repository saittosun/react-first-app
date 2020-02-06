//jshint esversion: 6
import React from 'react';
import './Person.css';

const Personn = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>i am {props.name} and {props.age} years old.</p>
      <input 
        type="text"
        onChange={props.changed}/>
    </div>
  )
}

export default Personn;


