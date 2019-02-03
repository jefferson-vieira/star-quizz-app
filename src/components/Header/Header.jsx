import React from 'react';

import logo from '../../assets/img/header-logo.svg';

const Header = () => (
  <div
    id="header"
    className="header row align-items-center border-bottom border-warning text-warning py-3"
  >
    <div className="header__logo col-12 col-md-auto text-center">
      <img
        id="game-header-logo"
        className="img-fluid"
        alt="StarQuizz Logo"
        src={logo}
      />
    </div>
    <header className="header__title col-12 col-md-auto">
      <h1>starquizz</h1>
      <h3>challenge</h3>
    </header>
  </div>
);

export default Header;
