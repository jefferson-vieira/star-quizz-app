import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

import Header from '@/components/Header';

import timeUtils from '@/utils/time'

library.add(faTrophy);

const renderRows = players => {
  return players.map((player, index) => (
    <tr key={index}>
      <th scope="row">
        {[1, 2, 3].includes(++index) ? (
          <FontAwesomeIcon
            icon="trophy"
            color={index === 1 ? 'gold' : index === 2 ? 'silver' : '#cd7f32'}
          />
        ) : (
          `${index}º`
        )}
      </th>
      <td>{player.score}</td>
      <td>{player.name}</td>
      <td>{player.date ? timeUtils.toLocalDateTime(player.date) : 'Desconhecido...'}</td>
      <td>
        <a className="rank-list--text-white" href={`mailto:${player.email}`}>
          {player.email}
        </a>
      </td>
    </tr>
  ));
};

const RankList = ({ players }) => (
  <section id="rank-list" className="container my-5">
    <Header title="Rank" />
    {players.length ? (
      <div className="table-responsive">
        <table className="table table-dark table-striped table-bordered table-hover text-center my-3">
          <caption className="sr-only">Rank</caption>
          <thead>
            <tr className="bg-primary">
              <th>#</th>
              <th>Pontuação</th>
              <th>Nome</th>
              <th>Data</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>{renderRows(players)}</tbody>
        </table>
      </div>
    ) : (
      <div className="rank-list__message my-5">
        <h2>Ninguém jogou ainda.</h2>
        <h3>Seja o primeiro!</h3>
      </div>
    )}
  </section>
);

export default RankList;
