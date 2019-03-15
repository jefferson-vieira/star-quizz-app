import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import EndGameScore from './EndGameScore';
import EndGameMessage from './EndGameMessage';
import EndGameForm from './EndGameForm';

const EndGame = ({
  show,
  score,
  time,
  inputChange,
  player,
  savePlayer,
  validated,
  saved
}) => (
  <Modal id="modal-end-game" show={show} backdrop="static" centered>
    <Modal.Header>
      <Modal.Title>Fim de Jogo</Modal.Title>
    </Modal.Header>
    <Modal.Body className="mx-3">
      <EndGameScore score={score} time={time} />
      {saved ? (
        <EndGameMessage name={player.name} />
      ) : (
        <EndGameForm
          validated={validated}
          savePlayer={savePlayer}
          player={player}
          inputChange={inputChange}
        />
      )}
    </Modal.Body>
    <Modal.Footer>
      <div className="col-6">
        <Link to="/home" className="btn btn-danger w-100" title="Sair">
          Sair
        </Link>
      </div>
    </Modal.Footer>
  </Modal>
);

export default EndGame;
