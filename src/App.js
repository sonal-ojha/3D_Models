import React, { Component } from 'react';
import './App.css';
import Model from './Components/Models/Model';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">3D Models</div>
        <div className="models-container" >
          <Model />
        </div>
      </div>
    );
  }
}

export default App;
