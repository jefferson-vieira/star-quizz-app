import React from 'react';

import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import Game from '@/pages/Game';
import Rank from '@/pages/Rank';
import NotFound from '@/pages/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/rank" component={Rank} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
