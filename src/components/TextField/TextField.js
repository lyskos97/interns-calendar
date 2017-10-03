import React from 'react';
import s from './TextField.scss';

export default function TextField(props) {
  return <input type="text" className={s.date_field} defaultValue={props.date} />;
}
