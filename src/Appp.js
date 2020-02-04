//jshint esversion: 8
import './App.css';
import React, { Component } from 'react';
import Personn from './Person/Personn';

class Appp extends Component {
  state = {
    persons: [
      {name: 'ayla', age: 10},
      {name: 'esat', age: 14},
      {name: 'esra', age: 38}
    ],
    otherState: 'some other value of state'
  }

  switchHandler = (newName) => {
    this.setState({
      persons: [
        {name: 'ayla', age: 10},
        {name: 'esat', age: 14},
        {name: newName, age: 38}
      ]
    })
  }

  nameHandler = (e) => {
    this.setState({
      persons: [
        {name: e.target.value, age: 10},
        {name: 'esat', age: 14},
        {name: 'sati', age: 38}
      ]
    })
  }
  render() {
    const styleButton = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <button 
          style={styleButton}
          onClick={() => this.switchHandler('sait')}>switch-name</button>
        <Personn 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameHandler} />
        <Personn 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchHandler.bind(this, 'maxi')} />
        <Personn 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default Appp;