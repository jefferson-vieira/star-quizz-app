import React, { Fragment } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Rules = ({ show, close }) => (
  <Fragment>
    <Modal id="modal-rules" show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Regras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Você terá 2 minutos para acertar o nome do máximo de personagens de Star
        Wars que puder. Pontuação:
        <ul>
          <li>Acerto: 10 pontos</li>
          <li>Acerto (com ajuda): 5 pontos</li>
          <li>Erro: Nenhum ponto (sem perda)</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Fechar
        </Button>
        <Button variant="warning" onClick={close}>
          Começar
        </Button>
      </Modal.Footer>
    </Modal>
  </Fragment>
);

export default Rules;
