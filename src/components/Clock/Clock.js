import React from 'react';
import s from './Clock.scss';
import HoursCell from '../Cell/HoursCell';
import MinutesCell from '../Cell/MinutesCell';
import Separator from '../Cell/Separator';

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes().toString(),
    };
  }

  increaseHours() {
    let hours = this.state.hours + 1;
    hours = hoursLimit(hours);
    console.log('Increased by 1 hour!');
    this.setState({
      hours,
    });
  }

  decreaseHours() {
    let hours = this.state.hours - 1;
    hours = hoursLimit(hours);
    console.log('Decreased by 1 hour!');
    this.setState({
      hours,
    });
  }

  increaseMinutes() {
    let minutes = this.state.minutes + 1;
    minutes = minuteLimit(minutes);
    console.log('Increased by 1 minute!');
    this.setState({
      minutes,
    });
  }

  decreaseMinutes() {
    let minutes = this.state.minutes - 1;
    minutes = minuteLimit(minutes);
    console.log('Decreased by 1 minute!');
    this.setState({
      minutes,
    });
  }

  stringifyMinutes(minutes) {
    if (minutes < 10) return `0${minutes.toString()}`;
    else return minutes.toString();
  }

  render() {
    return (
      <div className={s.clock}>
        <HoursCell
          hours={this.state.hours}
          incr={() => this.increaseHours()}
          decr={() => this.decreaseHours()}
        />
        <Separator />
        <MinutesCell
          minutes={this.stringifyMinutes(this.state.minutes)}
          incr={() => this.increaseMinutes()}
          decr={() => this.decreaseMinutes()}
        />
      </div>
    );
  }
}

function minuteLimit(minutes) {
  if (minutes > 59) return 0;
  else if (minutes < 0) return 59;
  else return minutes;
}

function hoursLimit(hours) {
  if (hours > 23) return 0;
  else if (hours < 0) return 23;
  else return hours;
}
