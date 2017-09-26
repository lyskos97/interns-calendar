import React from 'react';
import s from './InputUpDown.scss';
import SvgIcon from '../SvgIcon';

// https://date-fns.org/ - for working with Date
// https://eonasdan.github.io/bootstrap-datetimepicker/ - What we want to get
// https://react.rocks/tag/DatePicker - React examples

export default class InputUpDown extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <span className={s.span}>Hi!</span>
        <SvgIcon file="arrow_up" wh={50} />
      </div>
    );
  }
}
