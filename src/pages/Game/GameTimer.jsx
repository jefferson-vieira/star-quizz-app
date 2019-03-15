import React, { Component } from 'react';

import Progress from '@/components/Progress';

import { MAX_TIME_STRING, MAX_TIME_IN_SECONDS } from '@/configs';

import timeUtils from '@/utils/time';

class GameTimer extends Component {
  state = {
    maxTimeString: MAX_TIME_STRING,
    maxTime: MAX_TIME_IN_SECONDS,
    time: MAX_TIME_IN_SECONDS
  };

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
    const { interval, maxTimeString, maxTime, time } = this.state;

    clearInterval(interval);
    this.props.stopGame(timeUtils.getTime(maxTimeString, maxTime - time));
  };

  render() {
    const { maxTimeString, maxTime, time } = this.state;

    return (
      <div id="game-timer" className="game-header__timer m-3">
        <div className="row align-items-center justify-content-center border border-primary rounded p-3 m-1">
          <p id="timer" className="text-border mb-0">
            {timeUtils.getTime(maxTimeString, maxTime - time)}
          </p>
          <div className="col-12 my-3">
            <Progress valuenow={this.getProgress()} />
          </div>
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
    );
  }
}

export default GameTimer;
