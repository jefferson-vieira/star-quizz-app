import React, { Component } from 'react';

import PageHeader from '@/components/PageHeader';
import HomeButton from '@/components/HomeButton';

import RankList from './RankList';

import playerService from '@/services/player';

class Rank extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    const players = playerService.getPlayers();
    this.setState({ players });
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
