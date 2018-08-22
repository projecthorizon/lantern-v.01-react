import React, { Component } from 'react';
import NavButton from './components/atoms';
import './Lantern.css';
import { Nav } from './components/molecules';
import { SubNav } from './components/molecules';

class Lantern extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <SubNav />
      </div>
    );
  }
}

export default Lantern;
