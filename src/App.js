import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import DetailPizza from './pages/DetailPizza';
import NewPizza from './pages/NewPizza';
import ListPizzas from './pages/ListPizzas';
import UpdatePizza from './pages/ListPizzas';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pizza" component={ListPizzas} />
          <Route exact path="/pizza/:id" component={DetailPizza} />
          <Route exact path="/create" component={NewPizza} />
          <Route exact path="/pizza/:id" component={UpdatePizza} />
        </Switch>
      </Router>
    );
  }
}

export default App;
