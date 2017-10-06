import React from 'react';
import s from './Clock.scss';
import ss from './../UpDownControl/UpDownControl.scss';
import UpDownControl from './../UpDownControl/UpDownControl';
import df from 'date-fns';

export default class Clock extends React.Component {
  render() {
    return (
      <div className={s.clock}>
        <button className={s.switcher} onClick={this.props.handleClockBtnClick}>
          <i className={'fa fa-calendar'} />
        </button>
        <div className={s.clock_controls}>
          <UpDownControl
            value={this.props.date.getHours()}
            min={0}
            max={23}
            onChange={this.props.onChangeHH}
            cycle
          />
          <div className={ss.cell}>:</div>
          <UpDownControl
            value={this.props.date.getMinutes()}
            min={0}
            max={59}
            onChange={this.props.onChangeMM}
            cycle
          />
        </div>
      </div>
    );
  }
}
