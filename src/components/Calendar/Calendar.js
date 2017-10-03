import React from 'react';
import df from 'date-fns';
import s from './Calendar.scss';

export default class Calendar extends React.Component {
  render() {
    const d = this.props.date;
    /* Days of the week header */
    const daysOfTheWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const weekJsx = [];
    daysOfTheWeek.forEach((el, i) => {
      weekJsx.push(<button key={i}>{el}</button>);
    });
    /* Handle month detection */
    const allMonths = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const daysArr = df.eachDay(df.startOfMonth(d), df.endOfMonth(d));
    const monthStart = df.startOfMonth(d);
    const firstDay = df.getDay(monthStart);
    const daysJsx = [];
    for (let it = 0; it < firstDay; it++) {
      daysJsx[it] = <div className={s.day_empty}>{null}</div>;
    }
    console.log('Months first day of the week ==>', firstDay);
    daysArr.forEach((el, i) => {
      if (
        el.getFullYear() === d.getFullYear() &&
        el.getMonth() === d.getMonth() &&
        el.getDate() === d.getDate()
      ) {
        daysJsx.push(
          <button className={s.day_selected} key={daysJsx[daysJsx.length]}>
            {el.getDate()}
          </button>
        );
      } else {
        daysJsx.push(
          <button className={s.day} key={i}>
            {el.getDate()}
          </button>
        );
      }
    });
    return (
      <div className={s.month}>
        <div className={s.title}>{allMonths[df.getMonth(this.props.date)]}</div>
        <div className={s.week_header}>{weekJsx}</div>
        <div className={s.days}>{daysJsx}</div>
      </div>
    );
  }
}
