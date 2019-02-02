import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './GameHeader';

import { operations } from '../../store/ducks/game';

class Game extends Component {
  componentWillMount() {
    this.props.getPeople();
  }

  componentDidCatch() {
    alert('aff');
  }

  render() {
    console.log(this.props.people.results);
    return (
      <section id="game">
        <Header />
      </section>
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
)(Game);
