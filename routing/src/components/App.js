import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import About from '../pages/About/About';
import Pets from '../pages/Pets/Pets';
// import NotFound from './NotFound/NotFound';
import Nav from './Nav/Nav';
// import ArticlePage from '../pages/ArticlePage/ArticlePage';

const styleApp = { width: 800, margin: '0 auto' };

class App extends Component {
  state = {};

  render() {
    return (
      <div style={styleApp}>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={About} />
          {/* <Route path="/home" component={HomePage} /> */}
          <Route path="/pets" component={Pets} />
          <Route path="/pets/:id" component={Pets} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
