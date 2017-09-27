import React, { Component } from 'react';
import './reset.css';
import s from './App.scss';
import Clock from './components/Clock/Clock';

export default class App extends Component {
  render() {
    return (
      <div className={s.App}>
        <Clock />
      </div>
    );
  }
}
