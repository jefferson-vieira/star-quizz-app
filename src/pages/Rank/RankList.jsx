import React from 'react';

const renderRows = players => {
  return players.map((player, index) => (
    <tr key={index}>
      <th scope="row">{`${index + 1}º`}</th>
      <td>{player.score}</td>
      <td>{player.name}</td>
      <td>{player.email}</td>
    </tr>
  ));
};

const RankList = ({ players }) => (
  <section id="rank-list" className="container my-5">
    <header className="rank-list__header border-warning border-bottom pb-2 my-3">
      <h1>Rank</h1>
    </header>
    {players.length ? (
      <div className="table-responsive">
        <table className="table table-dark table-striped table-bordered table-hover my-3">
          <caption className="sr-only">Rank</caption>
          <thead>
            <tr className="bg-warning">
              <th>#</th>
              <th>Score</th>
              <th>Name</th>
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
