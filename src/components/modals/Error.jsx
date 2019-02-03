import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const EndGame = ({ show, refresh }) => (
  <Modal id="modal-has-error" show={show} backdrop="static" centered>
    <Modal.Header>
      <Modal.Title>Ops...</Modal.Title>
    </Modal.Header>
    <Modal.Body className="mx-3">
      <p>Houve um erro ao carregar os dados dos personagens.</p>
      <p>Tente novamente agora ou volte mais tarde.</p>
    </Modal.Body>
    <Modal.Footer>
      <div className="col-6">
        <Link to="/home" className="btn btn-danger w-100" title="Sair">
          Sair
        </Link>
      </div>
      <div className="col-6">
        <Button
          variant="warning"
          className="w-100"
          title="Recarregar"
          onClick={refresh}
        >
          Tentar Novamente
        </Button>
      </div>
    </Modal.Footer>
  </Modal>
);

export default EndGame;
