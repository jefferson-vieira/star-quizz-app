import React from 'react';

import PaginatorItem from './PaginatorItem';

function renderPages(href, totalItems, currentPage, changePage) {
  const pages = Math.ceil(totalItems / 10) || 0;

  const isActive = page => currentPage === page;

  return Array.from(new Array(pages), (val, index) => {
    const page = ++index;
    return (
      <PaginatorItem
        key={page}
        href={href}
        page={page}
        isActive={isActive(page)}
        changePage={changePage}
      />
    );
  });
}

const Paginator = ({
  id,
  href,
  totalItems,
  currentPage,
  changePage,
  next,
  previous
}) =>
  !!totalItems && (
    <nav aria-label={`${id} navigation`} className="paginator">
      <ul className="pagination pagination-lg text-center">
        <PaginatorItem
          href={href}
          page={currentPage - 1}
          text="‹"
          message="Anterior"
          isDisabled={!previous}
          changePage={() => changePage(currentPage - 1)}
        />
        {renderPages(href, totalItems, currentPage, changePage)}
        <PaginatorItem
          href={href}
          page={currentPage + 1}
          text="›"
          message="Próximo"
          isDisabled={!next}
          changePage={() => changePage(currentPage + 1)}
        />
      </ul>
    </nav>
  );

export default Paginator;
