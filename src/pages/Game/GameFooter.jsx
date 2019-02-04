import React, { Component } from 'react';

class GameFooter extends Component {
  renderPages = () => {
    const { currentPage, totalItems, getPeople } = this.props;

    const pages = Math.ceil(totalItems / 10) || 0;

    const isActive = page => currentPage === page;

    return Array.from(new Array(pages), (val, index) => {
      const page = index + 1;
      return (
        <li key={page} className={`page-item ${isActive(page) && 'active'}`}>
          <a
            href="#game-header"
            className="page-link"
            title={`Ir para a página ${page}`}
            onClick={() => getPeople(page)}
          >
            {page}
          </a>
        </li>
      );
    });
  };

  render() {
    const { currentPage, getPeople, next, previous } = this.props;

    return (
      <section id="game-footer" className="border-top border-warning pt-3">
        <nav aria-label="Game Navigation">
          <ul className="pagination pagination-lg justify-content-center">
            <li className={`page-item ${!previous && 'disabled'}`}>
              <a
                href="#game-body"
                className="page-link"
                title={`Ir para a página ${currentPage - 1}`}
                onClick={() => getPeople(currentPage - 1)}
              >
                &lArr; Anterior
              </a>
            </li>
            {this.renderPages()}
            <li className={`page-item ${!next && 'disabled'}`}>
              <a
                href="#game-body"
                className="page-link"
                title={`Ir para a página ${currentPage + 1}`}
                onClick={() => getPeople(currentPage + 1)}
              >
                Próximo &rArr;
              </a>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default GameFooter;
