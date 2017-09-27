import React from 'react';
import s from './Input.scss';
import SvgIcon from '../SvgIcon';

export default function InputUp(props) {
  return (
    <button className={s.btn} onClick={props.incr}>
      <SvgIcon file="arrow_up" wh={50} />
    </button>
  );
}
