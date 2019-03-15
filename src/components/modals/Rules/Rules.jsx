import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

const Rules = ({ show, close }) => (
  <Modal id="modal-rules" show={show} onHide={close}>
    <Modal.Header>
      <Modal.Title>Regras</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ul>
        <li>
          Você terá 2 (dois) minutos para acertar o nome do máximo de
          personagens de Star Wars que puder.
        </li>
        <li>
          Utilize os botões:
          <div className="modal-rules__btn-grid p-1">
            <button className="btn btn-outline-primary btn-sm" disabled>
              ?
            </button>
            <span>Para dar uma resposta;</span>
          </div>
          <div className="modal-rules__btn-grid p-1">
            <button className="btn btn-outline-dark btn-sm" disabled>
              ...
            </button>
            <span>Para usar a ajuda;</span>
          </div>
        </li>
        <li>Você poderá tentar acertar o mesmo personagem até conseguir.</li>
        <li>
          Ao deixar o campo de resposta ou ao clicar no "Enter" sua tentativa
          será validada.
        </li>
        <li>
          Pontuação:
          <div>Acerto (sem ajuda): 10 pontos;</div>
          <div>Acerto (com ajuda): 5 pontos;</div>
          <div>Erro: Nenhum ponto (neutro);</div>
        </li>
      </ul>
    </Modal.Body>
    <Modal.Footer className="modal-rules__footer">
      <Button variant="dark" onClick={close} title="Fechar regras">
        Fechar
      </Button>
      <Link to="/game" className="btn btn-primary" title="Iniciar jogo">
        Começar
      </Link>
    </Modal.Footer>
  </Modal>
);

export default Rules;
