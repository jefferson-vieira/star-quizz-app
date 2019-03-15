import React from 'react';

const EndGameScore = ({ score, time }) => (
  <div className="row mb-3 border-bottom">
    <div className="col-12 text-center">
      <strong>Sua pontuação</strong>
      <h1 className="title">{score}</h1>
    </div>
    <div className="col-12 text-center">
      <strong>Tempo restante</strong>
      <h1>{time}</h1>
    </div>
  </div>
);

export default EndGameScore;
