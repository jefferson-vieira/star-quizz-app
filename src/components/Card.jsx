import React from 'react';

const Card = ({
  person,
  id,
  cardStyle,
  img,
  imgsrc,
  isValid,
  checkAnswer,
  isCorrect,
  showHelp,
  showInput
}) => (
  <div className="card">
    <div id={`game-card-${id}`} className={`card bg-light border-${cardStyle}`}>
      <div className="card-body">
        <img
          className="card-img-top"
          alt={`Personagem ${id} - Link: ${imgsrc}`}
          src={img}
        />
      </div>
      <div className={`card-footer bg-transparent border-${cardStyle}`}>
        <div className="row">
          <div className="col-12 my-1">
            <div className="form-group">
              <label htmlFor={`game-card-input-${id}`} className="sr-only">
                resposta
              </label>
              <input
                id={`game-card-input-${id}`}
                type="text"
                className={`form-control ${isValid}`}
                placeholder="Já sabe quem é?"
                onChange={e => checkAnswer(e.target.value)}
                disabled={isCorrect && 'disabled'}
              />
            </div>
          </div>
          <div className="col-12 my-1">
            <div className="row">
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-outline-dark w-100"
                  title="Ajuda"
                  onClick={() => showHelp(id)}
                >
                  ...
                </button>
              </div>
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-outline-warning w-100"
                  title="Responder"
                  onClick={() => showInput(id)}
                >
                  ?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
