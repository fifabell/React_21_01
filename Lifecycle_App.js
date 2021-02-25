import React,{useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props){
    super(props);
    console.log("hello");
    this.state = {
      count:1,
    };
    this.add = () => {
      this.setState(current => ({ count: current.count + 1 }));
    };
    this.minus = () => {
      this.setState(current => ({ count: current.count - 1 }));
    };
  }
  componentDidMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }

  render(){
    console.log("I'm rendering");
    return (
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div> 
    );  
  }
}

export default App;
