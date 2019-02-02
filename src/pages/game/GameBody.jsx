import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '../../components/Card';

import logo from '../../assets/img/logo.png';

import { operations } from '../../store/ducks/game';

class GameBody extends Component {
  componentWillMount() {
    this.props.getPeople();
  }

  checkAnswer = answer => {
    console.log(answer);
  };

  isCorrect = (answer, person) => {
    console.log(answer.toLowerCase() === person.name.toLowerCase());
    return answer.toLowerCase() === person.name.toLowerCase();
  };

  renderCards = () => {
    const people = this.props.people.results || [];
    return people.map((person, index) => (
      <Card
        key={index}
        id={index}
        person={person}
        cardStyle="success"
        img={logo}
        imgsrc={'aff'}
        isValid={false}
        checkAnswer={this.checkAnswer}
        isCorrect={false}
        showHelp={false}
        showInput={false}
      />
    ));
  };

  render() {
    console.log(this.props.people.results);

    return (
      <div className="game-body container-fluid my-3">{this.renderCards()}</div>
    );
  }
}

const mapStateToProps = state => ({
  people: state.game.people
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPeople: operations.getPeople
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBody);
