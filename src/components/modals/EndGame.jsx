import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const EndGame = ({
  show,
  score,
  time,
  inputChange,
  user: { name, email },
  saveUser,
  validated,
  savedScore
}) => (
  <Modal id="modal-end-game" show={show} backdrop="static" centered>
    <Modal.Header>
      <Modal.Title>Fim de Jogo</Modal.Title>
    </Modal.Header>
    <Modal.Body className="mx-3">
      <div className="row mb-3 border-bottom">
        <div className="col-12 text-center">
          <strong>Sua pontuação</strong>
          <h1 className="title">{score}</h1>
        </div>
        <div className="col-12 text-center">
          <strong>Tempo restante</strong>
          <h1>{time}</h1>
        </div>
      </div>
      {savedScore ? (
        <>
          <div className="alert alert-success" role="alert">
            Sua pontuação foi salva, {name}.
          </div>
          <p className="px-3">
            Você escolheu um caminho perigoso, {name}. Espero que você tenha o
            que é necessário...
          </p>
        </>
      ) : (
        <>
          <p>Preencha o formulário abaixo para salvar sua pontuação:</p>
          <Form noValidate validated={validated} onSubmit={saveUser}>
            <Form.Group
              as={Row}
              controlId="modal-end-game-user-name"
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
              controlId="modal-end-game-user-email"
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
                variant="warning"
                className="w-50"
                title="Salvar Pontuação"
              >
                Salvar
              </Button>
            </div>
          </Form>
        </>
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
