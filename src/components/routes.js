import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import PageTransition from 'react-router-page-transition';

import Home from '../pages/home';
import Schedule from '../pages/schedule';
import Venue from '../pages/venue';

const Routes = ({ location }) => (
  <PageTransition timeout={500}>
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/schedule" component={Schedule} />
      <Route exact path="/venue" component={Venue} />
    </Switch>
  </PageTransition>
);

export default withRouter(Routes);
