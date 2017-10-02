import React from 'react';
import s from './Clock.scss';
import ss from './../UpDownControl/UpDownControl.scss';
import UpDownControl from './../UpDownControl/UpDownControl';
import df from 'date-fns';

export default class Clock extends React.Component {
  render() {
    return (
      <div className={s.clock}>
        <UpDownControl
          val={df.format(this.props.date, 'HH')}
          increaseOnHold={() => this.props.increaseHoursOnHold()}
          decreaseOnHold={() => this.props.decreaseHoursOnHold()}
          holdStop={() => this.props.holdStop()}
        />
        <div className={ss.cell}>:</div>
        <UpDownControl
          val={df.format(this.props.date, 'mm')}
          increaseOnHold={() => this.props.increaseMinutesOnHold()}
          decreaseOnHold={() => this.props.decreaseMinutesOnHold()}
          holdStop={() => this.props.holdStop()}
        />
      </div>
    );
  }
}
