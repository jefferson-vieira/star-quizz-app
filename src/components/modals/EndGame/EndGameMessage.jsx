import React from 'react';

const EndGameMessage = ({ name }) => (
  <>
    <div className="alert alert-success" role="alert">
      Sua pontuação foi salva, {name}.
    </div>
    <p className="px-3">
      Você escolheu um caminho perigoso, {name}. Espero que você tenha o que é
      necessário...
    </p>
  </>
);
export default EndGameMessage;
