/* eslint import/no-webpack-loader-syntax: off */
import React, { Component } from 'react';
import TimePicker from './components/TimePicker';
import Logo from './components/Logo';
import { connect } from 'react-redux';

import './App.css';
import AnimationWrapper from './components/AnimationWrapper';

class App extends Component {
  render() {
    return (
      this.props.isSessionOngoing ? (
        <div className="App">
          <header className="App-header">
            <AnimationWrapper duration={this.props.duration}>
              <Logo className="App-visuals" alt="Calming visuals"/>
            </AnimationWrapper>
          </header>
        </div>
      ) : (
        <div className="App">
          <header className="App-header">
            <Logo className="App-logo"/>
          </header>
          <main className="App-main">
            <TimePicker />
          </main>
        </div>
       )
    );
  }
}

function mapStateToProps(state, props) {
    return {
      isSessionOngoing: state.TimePicker.session,
      duration: state.TimePicker.duration
    };
}

export default connect(mapStateToProps, null)(App);