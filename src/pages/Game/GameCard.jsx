import React, { Component } from 'react';
import classnames from 'classnames';

class Card extends Component {
  state = {
    shouldShowInput: false,
    usesHelp: false
  };

  handleShowInput = () => {
    this.setState(prevState => ({
      shouldShowInput: !prevState.shouldShowInput
    }));
  };

  showHelp = () => {
    this.setState({ usesHelp: true });
    this.props.showHelp();
  };

  checkAnswer = e => {
    const { usesHelp } = this.state;
    const { checkAnswer } = this.props;

    const answer = e.target.value;

    checkAnswer(answer, usesHelp);

    this.handleShowInput();
  };

  render() {
    const { id, character, answered, isCorrect } = this.props;
    const { shouldShowInput } = this.state;

    const cardStyle = isCorrect ? 'success' : 'primary';

    return (
      <div
        id={`game-card-${id}`}
        className={`game-card card bg-light border-${cardStyle}`}
      >
        <div className="card-body">
          <img alt={`Personagem ${id}`} src={character.imgsrc} />
        </div>
        <div className={`card-footer bg-transparent border-${cardStyle}`}>
          <div className="row">
            {isCorrect || shouldShowInput ? (
              <div className="col-12">
                <div className="form-group mb-0">
                  <label htmlFor={`game-card-input-${id}`} className="sr-only">
                    resposta
                  </label>
                  <input
                    id={`game-card-input-${id}`}
                    type="text"
                    className={classnames('form-control', {
                      'is-valid': isCorrect
                    })}
                    placeholder="Já sabe quem é?"
                    onBlur={e => this.checkAnswer(e)}
                    onKeyDown={e => e.key === 'Enter' && this.checkAnswer(e)}
                    defaultValue={answered}
                    disabled={isCorrect && 'disabled'}
                    autoComplete="off"
                    autoFocus
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-outline-dark w-100"
                    title="Ajuda"
                    onClick={this.showHelp}
                  >
                    ...
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-outline-primary w-100"
                    title="Responder"
                    onClick={this.handleShowInput}
                  >
                    ?
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
