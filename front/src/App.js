import React, { Component } from 'react';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Message></Message>
      </div>
    );
  }
}


export default App;

/*
function App() {
    return (
      <div className="App">
        <Greet></Greet>
      </div>
    );
}
*/