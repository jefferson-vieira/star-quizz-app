import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => (
  <div className="row justify-content-center">
    <Link to="/home" className="btn btn-outline-warning btn-lg" title="Home">
      Home
    </Link>
  </div>
);

export default HomeButton;
