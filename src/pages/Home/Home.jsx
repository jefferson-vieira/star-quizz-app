import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '@/components/Logo';
import Rules from '@/components/modals/Rules';

export default class Home extends Component {
  state = {
    showRules: false
  };

  handleRules = () => {
    this.setState(prevState => ({ showRules: !prevState.showRules }));
  };

  render() {
    return (
      <section id="home" className="home container my-3">
        <div className="row justify-content-center text-center">
          <Logo />
          <header id="home-title" className="home__title col-12">
            <h1>Bem-vindo ao Star Quizz App!</h1>
          </header>
          <section id="home-body" className="home__body col-12">
            <h2>
              Prove seus conhecimentos sobre{' '}
              <span className="home--yellow-text">Star Wars</span>.
            </h2>
            <h3>
              Para iniciar o desafio clique em{' '}
              <a href="#home-btn-play" className="home__play">
                jogar
              </a>
              .
            </h3>
            <h3>
              Mas lembre-se: ao clicar em JOGAR não haverá mais volta!
              <br />
              Está seguro disso? Então vá em frente e nos mostre...
            </h3>
            <div>
              <Link
                id="home-btn-rank"
                to="/rank"
                className="btn btn-outline-light btn-lg m-3"
                title="Mostrar pontuação"
              >
                Rank
              </Link>
              <button
                id="home-btn-play"
                type="button"
                className="btn btn-outline-primary btn-lg m-3"
                title="Mostrar regras"
                onClick={this.handleRules}
              >
                Jogar
              </button>
            </div>
          </section>
        </div>
        <Rules show={this.state.showRules} close={this.handleRules} />
      </section>
    );
  }
}
