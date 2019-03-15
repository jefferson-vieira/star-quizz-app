import React, { Component } from 'react';

import Help from '@/components/modals/Help';

import GameCard from './GameCard';

class GameBody extends Component {
  state = {
    currentCharacter: {},
    shoulShowHelp: false
  };

  handleHelp = () => {
    this.setState(prevState => ({ shoulShowHelp: !prevState.shoulShowHelp }));
  };

  showHelp = character => {
    this.setState(prevState => ({
      currentCharacter: character,
      shoulShowHelp: true
    }));
  };

  validateAnswer = (id, character, answer, help) => {
    const isCorrect = answer.toLowerCase() === character.name.toLowerCase();
    if (isCorrect) this.props.validateAnswer(id, answer, help);
  };

  renderCards = () => {
    const { characters, answers } = this.props;
    const charactersList = (characters && characters.results) || [];

    return charactersList.map((character, index) => (
      <GameCard
        key={index}
        id={index}
        character={character}
        showHelp={() => this.showHelp(character)}
        checkAnswer={(answer, help) =>
          this.validateAnswer(index, character, answer, help)
        }
        answered={answers[index] && answers[index].answer}
        isCorrect={!!answers[index]}
      />
    ));
  };

  render() {
    const { currentCharacter, shoulShowHelp } = this.state;
    const { endGame } = this.props;

    return (
      <section id="game-body" className="game-body my-3">
        {this.renderCards()}
        <Help
          character={currentCharacter}
          show={shoulShowHelp && !endGame}
          close={this.handleHelp}
        />
      </section>
    );
  }
}

export default GameBody;
