import React from 'react';
import s from './DateTimePicker.scss';
import Clock from './../Clock/Clock';
import Calendar from './../Calendar/Calendar';
import DateField from './../TextField/TextField';
// import { format } from 'date-fns';

export default class DateTimePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(1997, 10, 9),
      clockBtnPressed: false,
    };
    console.log('The Date:', this.state.date);
  }

  increaseHours() {
    const tmpDate = this.state.date;
    tmpDate.setHours(tmpDate.getHours() + 1);
    this.setState({ tmpDate });
  }

  decreaseHours() {
    const tmpDate = this.state.date;
    tmpDate.setHours(tmpDate.getHours() - 1);
    this.setState({ tmpDate });
  }

  increaseMinutes() {
    const tmpDate = this.state.date;
    tmpDate.setMinutes(tmpDate.getMinutes() + 1);
    this.setState({ tmpDate });
  }

  decreaseMinutes() {
    const tmpDate = this.state.date;
    tmpDate.setMinutes(tmpDate.getMinutes() - 1);
    this.setState({ tmpDate });
  }

  increaseHoursOnHold() {
    this.increaseHours();
    if (!this.state.clockBtnPressed) {
      this.pressDelay = setTimeout(() => {
        console.log('Holding the button');
        this.repeatOnHold = setInterval(() => {
          this.setState({ clockBtnPressed: true });
          this.increaseHours();
        }, 100);
      }, 500);
    }
  }

  decreaseHoursOnHold() {
    this.decreaseHours();
    if (!this.state.clockBtnPressed) {
      this.pressDelay = setTimeout(() => {
        console.log('Holding the button');
        this.repeatOnHold = setInterval(() => {
          this.setState({ clockBtnPressed: true });
          this.decreaseHours();
        }, 100);
      }, 500);
    }
  }

  increaseMinutesOnHold() {
    this.increaseMinutes();
    if (!this.state.clockBtnPressed) {
      this.pressDelay = setTimeout(() => {
        console.log('Holding the button');
        this.repeatOnHold = setInterval(() => {
          this.setState({ clockBtnPressed: true });
          this.increaseMinutes();
        }, 60);
      }, 500);
    }
  }

  decreaseMinutesOnHold() {
    this.decreaseMinutes();
    if (!this.state.clockBtnPressed) {
      this.pressDelay = setTimeout(() => {
        console.log('Holding the button');
        this.repeatOnHold = setInterval(() => {
          this.setState({ clockBtnPressed: true });
          this.decreaseMinutes();
        }, 60);
      }, 500);
    }
  }

  holdStop() {
    this.setState({ clockBtnPressed: false });
    clearInterval(this.repeatOnHold);
    clearTimeout(this.pressDelay);
    console.log('Stopped holding');
  }

  render() {
    return (
      <div className={s.date_picker}>
        <DateField date={this.state.date} />
        <Calendar date={this.state.date} />
        <Clock
          increaseHoursOnHold={() => this.increaseHoursOnHold()}
          decreaseHoursOnHold={() => this.decreaseHoursOnHold()}
          increaseMinutesOnHold={() => this.increaseMinutesOnHold()}
          decreaseMinutesOnHold={() => this.decreaseMinutesOnHold()}
          holdStop={() => this.holdStop()}
          date={this.state.date}
        />
      </div>
    );
  }
}
