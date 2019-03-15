import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Help = ({ character, show, close }) => (
  <Modal id="modal-help" show={show} onHide={close}>
    <Modal.Header closeButton>
      <Modal.Title>Sobre o Personagem</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded border-primary border"
            alt="Imagem do personagem"
            src={character.imgsrc}
          />
        </div>
        <div className="col-12 col-md-6">
          <ul className="pl-3">
            <li>
              <strong>Planeta:</strong> {character.homeworld}
            </li>
            <li>
              <strong>Espécie:</strong> {character.species}
            </li>
            <li>
              <strong>Nascimento:</strong> {character.birth_year}
            </li>
            <li>
              <strong>Gênero:</strong> {character.gender}
            </li>
            <li>
              <strong>Altura:</strong> {character.height / 100}m
            </li>
            <li>
              <strong>Peso:</strong> {character.mass} Kg
            </li>
            <li>
              <strong>Cor dos olhos:</strong> {character.eye_color}
            </li>
            <li>
              <strong>Cor do cabelo:</strong> {character.hair_color}
            </li>
            <li>
              <strong>Cor da pele:</strong> {character.skin_color}
            </li>
          {/* </ul>
        </div> */}
        {/* <div className="col-12">
          <ul className="pl-3 mt-md-3 mb-0"> */}
            <li>
              <strong>Naves:</strong> {character.starships || 'Nenhum'}
            </li>
            <li>
              <strong>Veículos:</strong> {character.vehicles || 'Nenhum'}
            </li>
          </ul>
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="dark" onClick={close} title="Fechar a ajuda">
        Fechar
      </Button>
    </Modal.Footer>
  </Modal>
);

export default Help;
