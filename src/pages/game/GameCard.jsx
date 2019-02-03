import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardStyle: 'warning',
      shouldShowInput: false
    };
  }

  showInput = () => {
    this.setState(prevState => ({
      shouldShowInput: !prevState.shouldShowInput
    }));
  };

  checkAnswer = event => {
    const answer = event.target.value.toLowerCase();
    const personName = this.props.person.name.toLowerCase();

    const isCorrect = answer === personName;
    if (!isCorrect) {
      this.setState(prevState => ({
        shouldShowInput: !prevState.shouldShowInput
      }));
    } else {
      this.setState({
        cardStyle: 'success',
        isCorrect: true
      });
    }
  };

  render() {
    const { id, person, showHelp } = this.props;
    const { cardStyle, isCorrect } = this.state;

    return (
      <div
        id={`game-card-${id}`}
        className={`game-card card bg-light border-${cardStyle}`}
      >
        <div className="card-body">
          <img
            className="card-img-top"
            alt={`Personagem ${id} - Link: ${person.imgsrc}`}
            src={person.imgsrc}
          />
        </div>
        <div className={`card-footer bg-transparent border-${cardStyle}`}>
          <div className="row game-card--fade">
            {this.state.shouldShowInput ? (
              <div className="col-12 my-1">
                <div className="form-group mb-0">
                  <label htmlFor={`game-card-input-${id}`} className="sr-only">
                    resposta
                  </label>
                  <input
                    id={`game-card-input-${id}`}
                    type="text"
                    className={`form-control ${isCorrect && 'is-valid'}`}
                    placeholder="Já sabe quem é?"
                    onBlur={e => this.checkAnswer(e)}
                    disabled={isCorrect && 'disabled'}
                    autoFocus
                  />
                </div>
              </div>
            ) : (
              <div className="col-12 my-1 game-card--fade">
                <div className="row">
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-outline-dark w-100"
                      title="Ajuda"
                      onClick={() => showHelp(person)}
                    >
                      ...
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-outline-warning w-100"
                      title="Responder"
                      onClick={this.showInput}
                    >
                      ?
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
