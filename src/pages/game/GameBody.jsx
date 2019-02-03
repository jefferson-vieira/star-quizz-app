import React, { Component } from 'react';

import Help from '../../components/modals/Help';

import GameCard from './GameCard';

import logo from '../../assets/img/logo.png';

class GameBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {},
      showHelp: false
    };
  }

  handleHelp = () => {
    this.setState(prevState => ({ showHelp: !prevState.showHelp }));
  };

  showHelp = person => {
    this.setState(prevState => ({ person, showHelp: !prevState.showHelp }));
  };

  renderCards = () => {
    const { people, validAnswer } = this.props;
    const peopleList = people.results || [];

    return peopleList.map((person, index) => (
      <GameCard
        key={index}
        id={index}
        person={person}
        showHelp={this.showHelp}
        validAnswer={validAnswer}
      />
    ));
  };

  render() {
    const { person, showHelp } = this.state;
    const { endGame } = this.props;

    return (
      <section id="game-body" className="game-body container-fluid my-3">
        {this.renderCards()}
        <Help
          person={person}
          show={showHelp && !endGame}
          close={this.handleHelp}
        />
      </section>
    );
  }
}

export default GameBody;
