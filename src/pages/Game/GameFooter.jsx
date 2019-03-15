import React from 'react';

import Paginator from '@/components/Paginator';

const GameFooter = ({
  totalItems,
  currentPage,
  fetchCharacters,
  next,
  previous
}) => (
  <section
    id="game-footer"
    className="game-footer border-top border-primary pt-3"
  >
    <Paginator
      id="game"
      href="#game-body"
      totalItems={totalItems}
      currentPage={currentPage}
      changePage={fetchCharacters}
      next={next}
      previous={previous}
    />
  </section>
);

export default GameFooter;
