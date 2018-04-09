import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as timePickerActions from '../actions/TimePicker';

class TimePicker extends Component {

  handleSubmit(event) {
    event.preventDefault();
    this.props.action.startSession();
  }

  handleChange(event) {
    const timerInputContents = event.target.value;
    this.props.action.updateTimerValue(timerInputContents);
  }

  render() {

    const visuals = (
      <section className="session-container">
        <p>Here there would be smooth visuals</p>
        <img src="https://media3.giphy.com/media/3o7aCVTfelG4XSbv3y/giphy.gif" alt="Calming visuals"/>
      </section>
    );

    const form = (
      <form className="timer-form" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="time-picker-input">Duration (min):</label>
          <input 
            id="time-picker-input"
            type="number"
            step="1"
            pattern="\d*"
            required
            className="Input"
            onChange={this.handleChange.bind(this)}
            value={this.props.value}/>
          <button className="Button" type="submit">Start the session</button>
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
      isSessionOngoing: state.TimePicker.session
    };
}
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(timePickerActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);
