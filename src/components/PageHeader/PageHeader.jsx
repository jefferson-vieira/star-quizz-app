import React from 'react';

import logo from '@/assets/img/header-logo.svg';

const PageHeader = () => (
  <div
    id="page-header"
    className="page-header d-flex align-items-center border-bottom border-primary text-primary py-3"
  >
    <div className="page-header__logo">
      <img
        id="page-header-logo"
        className="img-fluid"
        alt="StarQuizz Logo"
        src={logo}
      />
    </div>
    <header className="page-header__title col-md-auto">
      <h1>starquizz</h1>
      <h3>challenge</h3>
    </header>
  </div>
);

export default PageHeader;
