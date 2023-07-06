import React, { Component } from 'react'
import './App.css'
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Counter from './components/Counter'
import Message from './components/Message'
import Click from './components/Click'
import ClassCLick from './components/ClassClick'


class App extends Component {

  render() {
    return (
      <div className="App">
          <Click></Click>
          <ClassCLick></ClassCLick>
      </div>
    );
  }
}


export default App

/*
function App() {
    return (
      <div className="App">
        <Greet></Greet>
      </div>
    );
}
*/