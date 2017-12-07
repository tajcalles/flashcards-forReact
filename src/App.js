import React, { Component } from 'react';
import logo from './logo.svg';
import NewCard from './NewCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tester Flash Cards</h1>
        </header>
        <NewCard />
      </div>
    );
  }
}

export default App;
