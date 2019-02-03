import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import Progress from '../../components/Progress';

import { MAX_TIME_IN_SECONDS } from '../../configs';

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

  getTime = () => {
    return moment('00:02:00', 'HH:mm:ss')
      .subtract(this.state.maxTime - this.state.time, 'seconds')
      .format('HH:mm:ss');
  };

  getProgress = () => (this.state.time / this.state.maxTime) * 100;

  stopGame = () => {
    clearInterval(this.state.interval);
    alert('fim');
  };

  render() {
    return (
      <div className="game-header__timer m-3">
        <div className="row align-items-center border border-warning rounded p-3 m-1">
          <div className="col-12 text-center">
            <p id="timer" className="text-border mb-0">
              {this.getTime()}
            </p>
          </div>
          <div className="col-12 my-3">
            <Progress valuenow={this.getProgress()} />
          </div>
          <div className="col-12 text-center">
            <Link
              to="/home"
              className="btn btn-opt btn-danger"
              title="Desistir"
            >
              Desistir
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GameTimer;
