import React from 'react';

import Header from '@/components/Header';

import GameTimer from './GameTimer';

const GameHeader = ({ pauseTimer, stopGame }) => (
  <section id="game-header" className="game-header container-fuid">
    <Header />
    <GameTimer pauseTimer={pauseTimer} stopGame={stopGame} />
  </section>
);

export default GameHeader;
