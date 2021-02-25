import React,{useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import PropTypes from "prop-types";
// fetch

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading : true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    },3000);
  }
  render(){
    const {isLoading} = this.state;
    return (
      <div>{isLoading ? "Loading..." : "We are ready"}</div>
    );
  }
}

export default App;
