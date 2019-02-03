import React from 'react';

import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from '../pages/home';
import Game from '../pages/game';
import Rank from '../pages/rank';

const Router = () => (
  <BrowserRouter>
    <div className="container-fluid">
      <Switch>
        <Route exact path="/(|home)" component={Home} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/rank" component={Rank} />
        <Redirect from="*" to="/home" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
