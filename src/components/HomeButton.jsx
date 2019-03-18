import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => (
  <div className="row justify-content-center">
    <Link to="/home" className="btn btn-outline-primary btn-lg mb-3" title="Voltar ao início">
      Início
    </Link>
  </div>
);

export default HomeButton;
