import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Progress from '../../components/Progress';

import moment from 'moment';

class GameTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // time: '00:02:00'
      maxTime: 120,
      count: 120
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  startTimer = () => {
    this.setState({ time: moment(0, 'HH:mm:ss').seconds(this.state.count) })
    // const interval = setInterval(() => {
    //   this.setState({ time: this.state.time - 1 });
    // }, 1000);
    // this.setState({ interval });
  };

  render() {
    return (
      <div className="game-header__timer mt-3">
        <div className="row align-items-center border border-warning rounded p-3 m-1">
          <div className="col-12 timer text-center">
            <p id="timer" className="text-border">
              {this.state.time}
            </p>
          </div>
          <div className="col-12 my-3">
            <Progress valuenow={this.state.time / (this.state.maxTime / 100)} />
          </div>
          <div className="col-6 offset-3 text-center">
            <Link
              to="/home"
              className="btn btn-opt btn-danger"
              title="Desistir"
            >
              Sair
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GameTimer;
