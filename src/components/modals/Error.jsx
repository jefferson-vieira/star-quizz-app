import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { handleError } from '../../utils/error';

const EndGame = ({ error, refresh }) => (
  <Modal id="modal-has-error" show={!!error} backdrop="static" centered>
    <Modal.Header>
      <Modal.Title>Ops...</Modal.Title>
    </Modal.Header>
    <Modal.Body className="mx-3">
      <p>{handleError(error)}</p>
    </Modal.Body>
    <Modal.Footer>
      <div className="col-6">
        <Link to="/home" className="btn btn-danger w-100" title="Sair">
          Sair
        </Link>
      </div>
      <div className="col-6">
        <Button
          variant="primary"
          className="w-100"
          title="Recarregar"
          onClick={refresh}
        >
          Recarregar
        </Button>
      </div>
    </Modal.Footer>
  </Modal>
);

export default EndGame;
