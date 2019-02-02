import React from 'react';

import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from '../pages/home';
import Game from '../pages/game';

const Router = () => (
  <BrowserRouter>
    <div className="container-fluid">
      <Switch>
        <Route exact path="/(|home)" component={Home} />
        <Route exact path="/game" component={Game} />
        <Redirect from="*" to="/home" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
