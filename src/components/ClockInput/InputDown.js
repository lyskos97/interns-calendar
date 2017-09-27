import React from 'react';
import s from './Input.scss';
import SvgIcon from '../SvgIcon';

export default function InputDown(props) {
  return (
    <button className={s.btn} onClick={props.decr}>
      <SvgIcon file="arrow_down" wh={50} />
    </button>
  );
}
