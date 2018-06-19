import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as timePickerActions from '../actions/TimePicker';
import Logo from './Logo';
import styled, { keyframes } from 'styled-components';

class TimePicker extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.action.startSession();
  }

  handleChange(event) {
    const timerInputContents = event.target.value;
    this.props.action.updateTimerValue(timerInputContents);
  }

  render() {

    const animationTime = this.props.duration;

    const keyFrameBlur = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0.01;
    }  
    `;

    const Wrapper = styled.div`
      display: block;

      svg path {
        animation: ${keyFrameBlur} ease-in-out infinite;
        animation-duration: ${animationTime}s;
        animation-delay: 0s;  
      }
    `


    const visuals = (
      <section className="session-container">
        <Wrapper>
          {<Logo className="App-visuals" alt="Calming visuals" style={{width: "90%"}}/>}
        </Wrapper>
      </section>
    );

    const form = (
      <form className="timer-form" onSubmit={this.handleSubmit}>
        <fieldset>
          <label className="time-picker-input-label" htmlFor="time-picker-input">Duration</label>
          <div className="time-picker-input-wrapper">
            <input 
              id="time-picker-input"
              type="number"
              step="1"
              pattern="\d*"
              required
              size="3"
              className="Input"
              onChange={this.handleChange}
              value={this.props.value}/>
            <span className="timer-value-explanation">minutes</span>
          </div>
          
          <button className="Button" type="submit">Start</button>
        </fieldset>
      </form>
    );

    return (
      this.props.isSessionOngoing ? visuals : form
    )
  }
}

TimePicker.defaultProps = {
  timerValue: '10'
};

function mapStateToProps(state, props) {
    return {
      value: state.TimePicker.value,
      isSessionOngoing: state.TimePicker.session,
      duration: state.TimePicker.duration
    };
}
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(timePickerActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);
