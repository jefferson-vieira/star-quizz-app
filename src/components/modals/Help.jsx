import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Help = ({ person, show, close }) => (
  <Modal id="modal-help" show={show} onHide={close}>
    <Modal.Header closeButton>
      <Modal.Title>Regras</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="row">
        <div className="col-6">
          <img
            className="img-fluid rounded border-warning border"
            alt="Imagem"
            src={person.imgsrc}
          />
        </div>
        <div className="col-6 details">
          <ul className="pl-3">
            <li>
              <strong>Planeta:</strong> {person.homeworld}
            </li>
            <li>
              <strong>Espécie:</strong> {person.species}
            </li>
            <li>
              <strong>Nascimento:</strong> {person.birth_year}
            </li>
            <li>
              <strong>Gênero:</strong> {person.gender}
            </li>
            <li>
              <strong>Altura:</strong> {person.height / 100}m
            </li>
            <li>
              <strong>Peso:</strong> {person.mass} Kg
            </li>
            <li>
              <strong>Cor dos olhos:</strong> {person.eye_color}
            </li>
            <li>
              <strong>Cor do cabelo:</strong> {person.hair_color}
            </li>
            <li>
              <strong>Cor da pele:</strong> {person.skin_color}
            </li>
          </ul>
        </div>
        <div className="col-12 details">
          <ul className="pl-3 mt-3 mb-0">
            <li>
              <strong>Naves:</strong> {person.starships}
            </li>
            <li>
              <strong>Veículos:</strong> {person.vehicles}
            </li>
          </ul>
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={close}>
        Fechar
      </Button>
    </Modal.Footer>
  </Modal>
);

export default Help;
