import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '@/components/Header';

import RankList from './RankList';

class Rank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('scores')) || [];
    this.setState({ players: storage });
  }

  render() {
    const { players } = this.state;

    return (
      <section id="rank" className="container-fluid">
        <Header />
        <RankList players={players} />
        <div className="row justify-content-center">
          <Link
            to="/home"
            className="btn btn-outline-warning btn-lg"
            title="Home"
          >
            Home
          </Link>
        </div>
      </section>
    );
  }
}

export default Rank;
