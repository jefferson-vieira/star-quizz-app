import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

  render() {
    const { people } = this.props;
    const { currentPage } = this.state;

    return (
      <section id="game">
        <Header />
        <Body people={people} />
        <Footer
          totalItems={people.count}
          currentPage={currentPage}
          next={!!people.next}
          previous={!!people.previous}
          getPeople={this.getPeople}
        />
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
