import React  from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types";

const nameArray = [
  {
    id:1,
    name:"jongin",
    age:"31",
    rating: 1.5
  },
  {
    id:2,
    name:"jack",
    age:"29",
    rating: 1
  },
  {
    id:3,
    name:"Juliet",
    age:"23",
    rating: 1.2
  }
]

function Potato({name, age, rating}){
  return (
  <div>
    <h1>My name is {name}</h1>
    <h4>rating: {rating}/5.0</h4>
    <h2>AND I am {age} years old</h2>
  </div>
  );
}

Potato.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          nameArray.map( e=>(
          <Potato key={e.id} name={e.name} age={e.age} rating={e.rating} />
        ))}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
