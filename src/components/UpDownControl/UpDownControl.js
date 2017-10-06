import React from 'react';
import s from './UpDownControl.scss';
import SvgIcon from '../SvgIcon';
import df from 'date-fns';

export default class UpDownControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  changeValue(dt) {
    const { min, max, cycle, onChange } = this.props;
    const { value } = this.state;

    let newValue = value + dt;
    if (min !== undefined && value < min) {
      if (cycle && max !== undefined) newValue = max;
      else return;
    }
    if (max !== undefined && value > max) {
      if (cycle && min !== undefined) newValue = min;
      else return;
    }

    this.setState({ value: newValue });
    if (onChange) onChange(newValue);
  }

  onHold(cb) {
    this.timeoutId = setTimeout(() => {
      if (!this.intervalId) {
        this.intervalId = setInterval(cb, 50);
      }
    }, 300);
  }

  clearTimers = () => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  onHoldIncrement = () => {
    this.onHold(() => this.changeValue(1));
  };

  onClickIncrement = () => {
    this.clearTimers();
    this.changeValue(1);
  };

  onHoldDecrement = () => {
    this.onHold(() => this.changeValue(-1));
  };

  onClickDecrement = () => {
    this.clearTimers();
    this.changeValue(-1);
  };

  onClickValue = () => {
    if (this.props.onClickValue) this.props.onClickValue(this.state.value);
  };

  stringifyValue = numVal => {
    return numVal < 10 && numVal >= 0 ? '0' + numVal : numVal;
  };

  render() {
    const { value } = this.state;
    return (
      <div className={s.cell}>
        <button
          className={s.btn}
          onMouseDown={this.onHoldIncrement}
          onMouseLeave={this.clearTimers}
          onMouseUp={this.onClickIncrement}
        >
          <SvgIcon file="arrow_up" wh={50} />
        </button>

        <button className={s.btn} onClick={this.onClickValue}>
          <span>{this.stringifyValue(value)}</span>
        </button>

        <button
          className={s.btn}
          onMouseDown={this.onHoldDecrement}
          onMouseLeave={this.clearTimers}
          onMouseUp={this.onClickDecrement}
        >
          <SvgIcon file="arrow_down" wh={50} />
        </button>
      </div>
    );
  }
}
