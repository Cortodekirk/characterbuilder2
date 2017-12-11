import React, { Component } from 'react';
import './App.css';
import Skills from './Skills';
import Powers from './Powers.js';
import Description from './Description.js';
import Stat from './Stat.js';
import Name from './Name.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Name Name="Meridian" Points="200" /><br />
        <div className="StatContainer">
          <Stat Name="PSY" />
          <Stat Name="WAR" />
          <Stat Name="STR" />
          <Stat Name="END" />
        </div>
        <Description />
        <Powers />
        <Skills />
      </div>
    );
  }
}

export default App;
