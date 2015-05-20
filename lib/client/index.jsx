'use strict';
import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Route, RouteHandler } from 'react-router';
import RestaurantList from './components/RestaurantList.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Frontier</h1>
        <RouteHandler />
      </div>
    );
  }
}

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={RestaurantList} />
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler />, document.getElementById('outlet'));
});
