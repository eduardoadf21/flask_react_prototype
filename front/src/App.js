import React, { Component } from 'react'
import './App.css'
import PostUsers from './components/PostUsers';


class App extends Component {

  render() {
    return (
      <div className="App">
        <PostUsers></PostUsers>
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