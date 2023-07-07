import React, { Component } from 'react'
import './App.css'
import PostUsers from './components/PostUsers';
import PostForm from './components/PostForm'


class App extends Component {

  render() {
    return (
      <div className="App">
        <PostForm></PostForm>
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