import React, { Component } from 'react';
import TimePicker from './components/TimePicker';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt={'Relax App'} src={logo}/>
        </header>
        <main className="App-main">
          <TimePicker />
        </main>
      </div>
    );
  }
}

export default App;
