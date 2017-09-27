import React from 'react';
import s from './Cell.scss';

export default class MinutesCell extends React.Component {
  render() {
    return (
      <div className={s.cell}>
        <span>:</span>
      </div>
    );
  }
}
