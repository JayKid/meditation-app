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

    return (
      <form className="timer-form" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="time-picker-input">Duration (min):</label>
          <input 
            id="time-picker-input"
            type="number"
            step="5"
            pattern="\d*"
            required
            className="Input"
            onChange={this.handleChange.bind(this)}
            value={this.props.timerValue}/>
          <button className="Button" type="submit">Start the session</button>
        </fieldset>
      </form>
    )
  }
}

TimePicker.defaultProps = {
  timerValue: '10'
};

function mapStateToProps(state, props) {
    return {
        timerValue: state.TimePicker.value
    };
}
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(timePickerActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);
