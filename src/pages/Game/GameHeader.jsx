import React from 'react';

import PageHeader from '@/components/PageHeader';

import GameTimer from './GameTimer';

const GameHeader = ({ pauseTimer, stopGame }) => (
  <section id="game-header" className="game-header container-fuid">
    <PageHeader />
    <GameTimer pauseTimer={pauseTimer} stopGame={stopGame} />
  </section>
);

export default GameHeader;
