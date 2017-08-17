import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Header/Navigation';

import Landing from './components/Landing/Landing';
import Portfolio from './components/Portfolio/Portfolio';
import Lend from './components/Lend/Lend';
import Basket from './components/Basket/Basket';
import Payment from './components/Payment/Payment';
import Details from './components/Lend/Details';

import Footer from './components/Footer/Footer';

// import routes from './routes';
import './App.css';

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <Navigation history={ this.props.history } />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Lend" component={Lend} />
            <Route path="/Details" component={Details} />
            <Route path="/Basket" component={Basket} />
            <Route path="/Payment" component={Payment} />
          </Switch>
        <Footer />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={ Wrapper }></Route>
        </div>
      </Router>
    );
  }
}

export default App;
