import React, { Component } from 'react';

import PageHeader from '@/components/PageHeader';
import HomeButton from '@/components/HomeButton';

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
      <section id="rank" className="rank container-fluid">
        <PageHeader />
        <RankList players={players} />
        <HomeButton />
      </section>
    );
  }
}

export default Rank;
