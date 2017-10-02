import React from 'react';
import s from './BtnUpDown.scss';
import SvgIcon from '../SvgIcon';

export default function InputUp(props) {
  return (
    <button className={s.btn} onMouseDown={props.increaseOnHold} onMouseUp={props.holdStop}>
      <SvgIcon file="arrow_up" wh={50} />
    </button>
  );
}
