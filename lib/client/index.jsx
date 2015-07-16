'use strict';

// polyfill required for ES6 Array.find()
require('babel-core/polyfill');

import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Route, RouteHandler } from 'react-router';
import RestaurantList from './components/RestaurantList.jsx';
import HomeView from './components/HomeView.jsx';

React.initializeTouchEvents(true);

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <RouteHandler />
      </div>
    );
  }
}

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={HomeView} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler />, document.getElementById('outlet'));
});
