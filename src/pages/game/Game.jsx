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

  render() {
    const { loading, people } = this.props;
    const { currentPage } = this.state;

    return (
      <section id="game">
        <Loading show={loading} />
        <Header pauseTimer={loading} />
        <Body people={people} />
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
