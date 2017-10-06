import React from 'react';
import df from 'date-fns';
import s from './Calendar.scss';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
    };
  }

  getMonthPanel() {
    const { date } = this.state;
    const { handleDayClick } = this.props;
    this.monthTitle = df.format(date, 'MMMM YYYY');
    const monthStart = df.startOfMonth(date);
    const monthLenght = df.getDaysInMonth(date);
    this.days = [];
    for (let i = 0; i < 42; i++) {
      if (i < df.getDay(monthStart) || i >= df.getDay(monthStart) + monthLenght) {
        this.days.push(
          <div className={s.day_empty} key={i}>
            {null}
          </div>
        );
      } else if (i === date.getDate()) {
        this.days.push(
          <button className={s.day_selected} key={i}>
            {i - df.getDay(monthStart) + 1}
          </button>
        );
      } else {
        console.log('push iteration:', i, ' :\t ', i - df.getDay(monthStart) + 1, 'days');
        this.days.push(
          <button className={s.day} key={i} onClick={() => this.props.handleDayClick(i)}>
            {i - df.getDay(monthStart) + 1}
          </button>
        );
      }
    }
  }

  render() {
    this.getMonthPanel();
    const monthTitle = df.format(this.props.date, 'MMMM YYYY');
    /* Days of the week header */
    const daysOfTheWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const weekJsx = [];
    daysOfTheWeek.forEach((el, i) => {
      weekJsx.push(<button key={i}>{el}</button>);
    });
    /* Handle month detection */

    return (
      <div className={s.month}>
        <div className={s.title}>
          <button className={s.switch_month} onClick={this.props.switchToPreviousMonth}>
            <i className={'fa fa-chevron-left'} />
          </button>
          <button className={s.month_selected}>{monthTitle}</button>
          <button className={s.switch_month} onClick={this.props.switchToNextMonth}>
            <i className={'fa fa-chevron-right'} />
          </button>
        </div>
        <div className={s.week_header}>{weekJsx}</div>
        <div className={s.days}>{this.days}</div>
        <button className={s.switcher} onClick={this.props.handleClockBtnClick}>
          <i className={'fa fa-clock-o'} />
        </button>
      </div>
    );
  }
}
