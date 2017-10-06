import React from 'react';
import s from './DateTimePicker.scss';
import Clock from './../Clock/Clock';
import Calendar from './../Calendar/Calendar';
import df from 'date-fns';

export default class DateTimePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      showCalendar: false,
      showClock: false,
    };
    console.log('The Date:', this.state.date);
  }

  onChangeHH = val => {
    const newDate = df.setHours(this.state.date, val);
    this.setState({ date: newDate });
  };

  onChangeMM = val => {
    const newDate = df.setMinutes(this.state.date, val);
    this.setState({ date: newDate });
  };

  handleDayClick = day => {
    const date = df.setDate(this.state.date, day);
    this.setState({ date: date });
  };

  handleTextFieldClick = () => {
    if (!this.state.showClock) {
      this.setState({ showCalendar: !this.state.showCalendar });
    } else {
      this.setState({ showClock: !this.state.showClock });
    }
  };

  handleClockBtnClick = () => {
    this.setState({ showCalendar: !this.state.showCalendar, showClock: !this.state.showClock });
    console.log('kek');
  };

  switchToNextMonth = () => {
    const { date } = this.state;
    const newDate = df.setMonth(date, date.getMonth() + 1);
    this.setState({ date: newDate });
  };

  switchToPreviousMonth = () => {
    const { date } = this.state;
    const newDate = df.setMonth(date, date.getMonth() - 1);
    this.setState({ date: newDate });
  };

  render() {
    const { showCalendar, showClock } = this.state;
    return (
      <div className={s.date_picker}>
        <input
          type="text"
          className={s.date_field}
          value={df.format(this.state.date, 'HH:mm, dddd DD MMMM YYYY')}
          onClick={this.handleTextFieldClick}
        />
        {showCalendar && (
          <Calendar
            date={this.state.date}
            switchToNextMonth={this.switchToNextMonth}
            switchToPreviousMonth={this.switchToPreviousMonth}
            handleDayClick={this.handleDayClick}
            handleClockBtnClick={this.handleClockBtnClick}
          />
        )}
        {showClock && (
          <Clock
            onChangeHH={this.onChangeHH}
            handleClockBtnClick={this.handleClockBtnClick}
            onChangeMM={this.onChangeMM}
            date={this.state.date}
          />
        )}
      </div>
    );
  }
}
