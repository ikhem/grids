import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Header/Navigation';

import Landing from './components/Landing/Landing';
import Profile from './components/Profile/Profile';
import Lend from './components/Lend/Lend';

import Footer from './components/Footer/Footer';

export default(
  <div>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Lend" component={Lend} />
    </Switch>
    <Footer />
  </div>
)