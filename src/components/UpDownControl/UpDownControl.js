import React from 'react';
import s from './UpDownControl.scss';
import InputUp from '../BtnUpDown/InputUp';
import InputDown from '../BtnUpDown/InputDown';
import TimeValue from '../BtnUpDown/TimeValue';

export default class UpDownControl extends React.Component {
  render() {
    return (
      <div className={s.cell}>
        <InputUp
          increaseOnHold={() => this.props.increaseOnHold()}
          holdStop={() => this.props.holdStop()}
        />
        <TimeValue value={this.props.val} />
        <InputDown
          decreaseOnHold={() => this.props.decreaseOnHold()}
          holdStop={() => this.props.holdStop()}
        />
      </div>
    );
  }
}
