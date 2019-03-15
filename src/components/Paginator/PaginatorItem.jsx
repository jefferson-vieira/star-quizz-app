import React from 'react';
import classnames from 'classnames';

const PaginatorItem = ({
  href,
  page,
  text,
  message,
  isActive,
  isDisabled,
  changePage
}) => (
  <li
    className={classnames('page-item', {
      active: isActive,
      disabled: isDisabled
    })}
  >
    <a
      href={href}
      role="button"
      className="page-link"
      title={`Ir para a página ${page}`}
      onClick={() => changePage(page)}
    >
      <span aria-hidden="true">{text || page}</span>
      <span className="sr-only">{message || page}</span>
    </a>
  </li>
);

export default PaginatorItem;
