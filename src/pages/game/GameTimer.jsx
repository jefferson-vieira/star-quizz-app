import React, { Component } from 'react';

class GameTimer extends Component {
  render() {
    return (
      <div class="game-header__timer mt-3">
        <div class="row align-items-center border border-warning rounded p-3 m-1">
          <div class="col-12 timer text-center">
            <p id="timer" class="text-border">
              02:00
            </p>
          </div>
          <div class="col-12 my-3">
            <p>progress?</p>
          </div>
          <div class="col-6 offset-3 text-center">
            <button type="button" class="btn btn-opt btn-danger" title="Parar">
              Sair
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GameTimer;
