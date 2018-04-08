import React, { Component } from 'react';
import TimePicker from './components/TimePicker';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Relax App</h1>
        </header>
        <main className="App-main">
          <TimePicker />
        </main>
      </div>
    );
  }
}

export default App;
