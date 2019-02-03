import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

const Rules = ({ show, close }) => (
  <Modal id="modal-rules" show={show} onHide={close}>
    <Modal.Header closeButton>
      <Modal.Title>Regras</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        Você terá 2 minutos para acertar o nome do máximo de personagens de Star
        Wars que puder. Pontuação:
      </p>
      <ul>
        <li>Acerto: 10 pontos</li>
        <li>Acerto (com ajuda): 5 pontos</li>
        <li>Erro: Nenhum ponto (sem perda)</li>
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={close} title="Fechar regras">
        Fechar
      </Button>
      <Link to="/game" className="btn btn-warning" title="Iniciar jogo">
        Começar
      </Link>
    </Modal.Footer>
  </Modal>
);

export default Rules;
