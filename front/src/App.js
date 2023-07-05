import React from 'react';
import './App.css';
import { Greet } from './components/Greet.js'

function App() {
    return (
      <div className="App">
        <Greet></Greet>
      </div>
    );
}

export default App;
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet></Greet>
      </div>
    );
  }
}
*/