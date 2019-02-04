import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from '../../components/Loading';
import Error from '../../components/modals/Error';
import EndGame from '../../components/modals/EndGame';

import Header from './GameHeader';
import Body from './GameBody';
import Footer from './GameFooter';

import { operations } from '../../store/ducks/game';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      user: { name: '', email: '' }
    };
  }

  componentDidMount() {
    this.props.getPeople();
  }

  getPeople = page => {
    this.props.getPeople(page);
    this.setState({ currentPage: page });
  };

  validAnswer = usesHelp => {
    this.props.validateAnswer(usesHelp);
  };

  stopGame = remainingTime => {
    this.setState({ endGame: true, remainingTime });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => ({
      user: { ...prevState.user, [name]: value }
    }));
  };

  saveUser = event => {
    const form = event.currentTarget;

    event.preventDefault();

    if (form.checkValidity()) {
      const { score } = this.props;
      const { name, email } = this.state.user;

      const storage = JSON.parse(localStorage.getItem('scores')) || [];
      storage.push({
        name,
        email,
        score
      });
      localStorage.setItem('scores', JSON.stringify(storage));

      this.setState({ savedScore: true });
    }
    this.setState({ validated: true });
  };

  render() {
    const { loading, error, people, score } = this.props;
    const {
      currentPage,
      endGame,
      remainingTime,
      user,
      validated,
      savedScore
    } = this.state;

    return (
      <section id="game" className="container-fluid">
        <Loading show={loading} />
        <Error show={error} refresh={() => this.getPeople(currentPage)} />
        <Header pauseTimer={loading || error} stopGame={this.stopGame} />
        <Body people={people} validAnswer={this.validAnswer} endGame={endGame} />
        <Footer
          totalItems={people.count}
          currentPage={currentPage}
          next={!!people.next}
          previous={!!people.previous}
          getPeople={this.getPeople}
        />
        <EndGame
          show={endGame}
          score={score}
          time={remainingTime}
          inputChange={this.handleInputChange}
          user={user}
          saveUser={this.saveUser}
          validated={validated}
          savedScore={savedScore}
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.game.loading,
  error: state.game.error,
  people: state.game.people,
  score: state.game.score
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPeople: operations.getPeople,
      validateAnswer: operations.validateAnswer
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
