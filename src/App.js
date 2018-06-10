/* eslint import/no-webpack-loader-syntax: off */
import React, { Component } from 'react';
import TimePicker from './components/TimePicker';
import Logo from './components/Logo';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo className="App-logo"/>
        </header>
        <main className="App-main">
          <TimePicker />
        </main>
      </div>
    );
  }
}

export default App;
