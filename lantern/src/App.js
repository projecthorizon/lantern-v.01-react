import React, { Component } from 'react';
import NavButton from './components/atoms';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lantern</h1>
        <NavButton link="#">Why We Exist</NavButton>
        <NavButton link="#">What We Do</NavButton>
        <NavButton link="#">Candidate Development</NavButton>
        <NavButton link="#">Consultative Recruiting</NavButton>
      </div>
    );
  }
}

export default App;
