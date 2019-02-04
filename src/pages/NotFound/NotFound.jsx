import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

const NotFound = () => (
  <section id="not-found" class="not-found container-fluid">
    <Header />
    <section className="container my-5">
      <header class="not-found__header border-warning border-bottom pb-2 my-3">
        <h1>Ops...</h1>
      </header>
      <div className="not-found__message my-5">
        <h2>Página não encontrada.</h2>
        <h3>Clique no botão abaixo para ir até a página inicial.</h3>
      </div>
      <div class="row justify-content-center">
        <Link
          to="/home"
          className="btn btn-outline-warning btn-lg"
          title="Home"
        >
          Home
        </Link>
      </div>
    </section>
  </section>
);

export default NotFound;
