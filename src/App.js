//jshint esversion: 6
// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

///////////////////////CLASS COMPONENTS////////////////////////
class App extends Component {
  state = {
    persons: [
      {name: 'ayla', age: 10},
      {name: 'esat', age: 14},
      {name: 'esra', age: 38}
    ],
    otherState: 'some other value'
  }
  
  switchNameHandler = (newName) => {//this is a way of passing an argument,
    // this.state.persons[0].name = "sait"//DON'T DO THIS
    this.setState({
      persons: [
        {name: newName, age: 10},
        {name: 'sait', age: 14},
        {name: 'esra', age: 45}
      ]
    })
  }//you typically use handler here to indicate that this is a method you're not actively calling but you're assigning as an event handler. It's not required
  //it can be inefficient, react can re-render certain things in your app too often so I don't necessarily recommend using this  <button onClick={() => this.switchNameHandler('maximillian')}>switch-name</button>

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'ayla', age: 10},
        {name: event.target.value, age: 14},
        {name: 'esra', age: 45}
      ]
    })
  }
  render() {
    //inline style
    // eslint-disable-next-line
    const styleButton = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <button 
          onClick={() => this.switchNameHandler('maximillian')}
          // eslint-disable-next-line
          style={styleButton}>switch-name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          //here I'm passing it as a reference to this click property. And now we can use this click property in person.js. 
          click={this.switchNameHandler.bind(this, 'max!')}
          changed={this.nameChangedHandler}>my hobby is game</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    //Yukaridaki is javascript in the end, it gets compiled to this code(below).
    // return (
    //   React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hello sait '))
    // );
  }
}

export default App;
//we can define a special property named state, whereas props are set and passed from outside like name and age into the person component, state is managed from inside a component. Now important, this state property here is only available like this in components that extend components, so in class-based React components.

////////////////////////HOOKS///////////////////////////////////////
// const App = props => {
//   //array destructuring 
//   const [personsState, setPersonsState] = useState({//useState returns an array with exactly two elements and always two elements, that's important.the first element we get back will always be our current state,The second element in state array will always be a function that allows us to update this state,
//     persons: [
//       {name: 'ayla', age: 10},
//       {name: 'sait', age: 14},
//       {name: 'esra', age: 45}
//     ]
//   });

//   //this is super important because this means that whenever you're updating the state like this, you have to manually make sure you include all old state data.
//   //eslint-disable-next-line 
//   //that is how you manage state in a functional component with React hooks.
//   const [otherState, setOtherState] = useState('some other value');
//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         {name: 'ayla', age: 10},
//         {name: 'esat', age: 14},
//         {name: 'esra', age: 38}
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <button onClick={switchNameHandler}>switch-name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>my hobby is game</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// }

// export default App;
