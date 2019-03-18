import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Error from '@/components/modals/Error';
import EndGame from '@/components/modals/EndGame';

import Header from './GameHeader';
import Body from './GameBody';
import Footer from './GameFooter';

import { operations } from '@/store/ducks/game';
import playerService from '@/services/player';

class Game extends Component {
  state = {
    currentPage: 1,
    player: { name: '', email: '' }
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = (page = 1) => {
    const pageToLoad = page || this.state.currentPage;
    const { characters, fetchCharacters } = this.props;

    if (!characters[pageToLoad]) {
      fetchCharacters(pageToLoad);
    }

    this.setState({ currentPage: pageToLoad });
  };

  stopGame = remainingTime => {
    this.setState({ endGame: true, remainingTime });
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(prevState => ({
      player: { ...prevState.player, [name]: value }
    }));
  };

  savePlayer = event => {
    const form = event.currentTarget;

    event.preventDefault();

    if (form.checkValidity()) {
      const { score } = this.props;
      const { name, email } = this.state.player;

      playerService.savePlayer({ name, email, score, date: new Date() });

      this.setState({ saved: true });
    }
    this.setState({ validated: true });
  };

  reset = () => {
    this.props.reset();
  };

  render() {
    const {
      loading,
      error,
      characters,
      answers,
      validateAnswer,
      score
    } = this.props;
    const {
      currentPage,
      endGame,
      remainingTime,
      player,
      validated,
      saved
    } = this.state;

    const currentCharacters = characters[currentPage] || [];
    const currentAnswers = answers[currentPage] || [];

    return (
      <section id="game" className="game">
        <Header pauseTimer={error || loading} stopGame={this.stopGame} />
        <Body
          characters={currentCharacters}
          answers={currentAnswers}
          validateAnswer={(...attrs) => validateAnswer(currentPage, ...attrs)}
          endGame={endGame}
        />
        <Footer
          totalItems={currentCharacters.count}
          currentPage={currentPage}
          next={!!currentCharacters.next}
          previous={!!currentCharacters.previous}
          fetchCharacters={this.fetchCharacters}
        />
        <EndGame
          show={endGame}
          score={score}
          time={remainingTime}
          inputChange={this.handleInputChange}
          player={player}
          savePlayer={this.savePlayer}
          validated={validated}
          saved={saved}
          reset={this.reset}
        />
        <Error error={error} refresh={this.fetchCharacters} />
      </section>
    );
  }
}

export default connect(
  ({ status, game }) => ({
    ...status,
    ...game,
    score:
      game.answers.length &&
      game.answers
        .filter(v => v)
        .reduce((page, nextPage) => page.concat(nextPage))
        .filter(v => v)
        .reduce((score, nextAnswer) => score + nextAnswer.score, 0)
  }),
  dispatch => bindActionCreators(operations, dispatch)
)(Game);
