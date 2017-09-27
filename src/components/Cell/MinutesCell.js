import React from 'react';
import s from './Cell.scss';
import InputUp from '../ClockInput/InputUp';
import InputDown from '../ClockInput/InputDown';
import TimeValue from '../ClockInput/TimeValue';

export default class MinutesCell extends React.Component {
  render() {
    return (
      <div className={s.cell}>
        <InputUp incr={() => this.props.incr()} />
        <TimeValue value={this.props.minutes} />
        <InputDown decr={() => this.props.decr()} />
      </div>
    );
  }
}
