import React from 'react';
import s from './BtnUpDown.scss';
import SvgIcon from '../SvgIcon';

export default function InputDown(props) {
  return (
    <button className={s.btn} onMouseDown={props.decreaseOnHold} onMouseUp={props.holdStop}>
      <SvgIcon file="arrow_down" wh={50} />
    </button>
  );
}
