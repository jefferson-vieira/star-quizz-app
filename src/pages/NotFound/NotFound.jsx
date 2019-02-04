import React from 'react';

import PageHeader from '@/components/PageHeader';
import Header from '@/components/Header';
import HomeButton from '@/components/HomeButton';

const NotFound = () => (
  <section id="not-found" className="not-found container-fluid">
    <PageHeader />
    <section className="container my-5">
      <Header title="Ops..." />
      <div className="not-found__message my-5">
        <h2>Página não encontrada.</h2>
        <h3>Clique no botão abaixo para ir até a página inicial.</h3>
      </div>
      <HomeButton />
    </section>
  </section>
);

export default NotFound;
