import React from 'react';
import s from './Input.scss';

export default function TimeValue(props) {
  return (
    <button className={s.btn}>
      <span>{props.value}</span>
    </button>
  );
}
