import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from '../../components/Loading';

import Header from './GameHeader';
import Body from './GameBody';
import Footer from './GameFooter';

import { operations } from '../../store/ducks/game';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1
    };
  }

  componentWillMount() {
    this.props.getPeople();
  }

  getPeople = page => {
    this.props.getPeople(page);
    this.setState({ currentPage: page });
  };

  validAnswer = usesHelp => {
    this.props.validateAnswer(usesHelp);
  };

  render() {
    const { loading, people } = this.props;
    const { currentPage } = this.state;

    console.log(this.props.points);

    return (
      <section id="game">
        <Loading show={loading} />
        <Header pauseTimer={loading} />
        <Body people={people} validAnswer={this.validAnswer} />
        <Footer
          totalItems={people.count}
          currentPage={currentPage}
          next={!!people.next}
          previous={!!people.previous}
          getPeople={this.getPeople}
        />
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.game.loading,
  people: state.game.people,
  points: state.game.points
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
