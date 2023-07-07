import React, { Component } from 'react'
import './App.css'
import PostUsers from './components/PostUsers';
import PostForm from './components/PostForm'
import Upload from './components/Upload'
import Login from './components/Login'
import Logout from './components/Logout'



class App extends Component {

  render() {
    return (
      <div className="App">
        <PostForm></PostForm>
        <Login></Login>
        <Logout></Logout>
        <PostUsers></PostUsers>
        <Upload></Upload>
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