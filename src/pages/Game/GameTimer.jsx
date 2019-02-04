import React, { Component } from 'react';

import Progress from '@/components/Progress';

import { MAX_TIME_IN_SECONDS } from '@/configs';

import timeUtils from '@/utils/time';

class GameTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maxTime: MAX_TIME_IN_SECONDS,
      time: MAX_TIME_IN_SECONDS
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopGame();
  }

  startTimer = () => {
    const interval = setInterval(() => {
      if (this.state.time <= 0) {
        this.stopGame();
      } else if (!this.props.pauseTimer) {
        this.setState(prevState => ({ time: prevState.time - 1 }));
      }
    }, 1000);
    this.setState({ interval });
  };

  getProgress = () => (this.state.time / this.state.maxTime) * 100;

  stopGame = () => {
    const { interval, maxTime, time } = this.state;

    clearInterval(interval);
    this.props.stopGame(timeUtils.getTime('00:02:00', maxTime - time));
  };

  render() {
    const { maxTime, time } = this.state;

    return (
      <div className="game-header__timer m-3">
        <div className="row align-items-center border border-warning rounded p-3 m-1">
          <div className="col-12 text-center">
            <p id="timer" className="text-border mb-0">
              {timeUtils.getTime('00:02:00', maxTime - time)}
            </p>
          </div>
          <div className="col-12 my-3">
            <Progress valuenow={this.getProgress()} />
          </div>
          <div className="col-12 text-center">
            <button
              type="button"
              className="btn btn-danger"
              title="Desistir"
              onClick={this.stopGame}
            >
              Desistir
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GameTimer;
