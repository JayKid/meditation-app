/* eslint import/no-webpack-loader-syntax: off */
import React, { Component } from 'react';
import TimePicker from './components/TimePicker';
import Logo from '!svg-react-loader?name=Logo!./logo.svg'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo aria-hidden="true" className="App-logo"/>
        </header>
        <main className="App-main">
          <TimePicker />
        </main>
      </div>
    );
  }
}

export default App;
