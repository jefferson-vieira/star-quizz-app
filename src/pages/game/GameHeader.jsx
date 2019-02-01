import React from 'react';

import logo from '../../assets/img/header-logo.svg';

import GameTimer from './GameTimer';

const GameHeader = () => (
  <section id="game-header" className="game-header container-fuid">
    <div className="row align-items-center mt-3">
      <div className="game-header__logo col-sm-3 text-center">
        <img
          id="game-header-logo"
          className="img-fluid"
          alt="StarQuizz Logo"
          src={logo}
        />
      </div>
      <header className="game-header__title">
        <h1>starquizz</h1>
        <h3>challenge</h3>
      </header>
      <GameTimer />
    </div>
  </section>
);

export default GameHeader;
