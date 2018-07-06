import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Summary from './components/summary/Summary'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Chin's Budget</h1>
        </header>
        <Summary />
      </div>
    );
  }
}

export default App;
