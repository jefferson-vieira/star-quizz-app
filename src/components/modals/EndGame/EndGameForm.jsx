import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const EndGameForm = ({
  validated,
  savePlayer,
  player: { name, email },
  inputChange
}) => (
  <>
    <p>Preencha o formulário abaixo para salvar sua pontuação:</p>
    <Form noValidate validated={validated} onSubmit={savePlayer}>
      <Form.Group
        as={Row}
        controlId="modal-end-game-player-name"
        className="mb-3"
      >
        <Form.Label column sm={2}>
          Nome:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Digite seu nome"
            name="name"
            value={name}
            onChange={inputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Digite o seu nome!
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        controlId="modal-end-game-player-email"
        className="mb-3"
      >
        <Form.Label column sm={2}>
          Email:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
            value={email}
            onChange={inputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Digite o seu e-mail!
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button
          type="submit"
          variant="primary"
          className="w-50"
          title="Salvar Pontuação"
        >
          Salvar
        </Button>
      </div>
    </Form>
  </>
);

export default EndGameForm;
