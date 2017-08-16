import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Header/Navigation';

import Landing from './components/Landing/Landing';
import Portfolio from './components/Portfolio/Portfolio';
import Lend from './components/Lend/Lend';
import Basket from './components/Basket/Basket';
import Payment from './components/Payment/Payment';

import Footer from './components/Footer/Footer';

export default(
  <div>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/Lend" component={Lend} />
      <Route path="/Basket" component={Basket} />
      <Route path="/Payment" component={Payment} />
    </Switch>
    <Footer />
  </div>
)