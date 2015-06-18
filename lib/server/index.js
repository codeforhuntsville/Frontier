'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var compress = require('compression');
var path = require('path');
var serveStatic = require('serve-static');
var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackConfig = require('../../webpack.config');
var routes = require('./routes');
var publicDir = path.resolve(__dirname, '../..', 'public');

module.exports = function () {
  var server = express();

  // configuration and global middleware
  server.use(bodyParser.json());
  server.use(compress());

  if (process.env.NODE_ENV !== 'production') {
    // webpack dev middleware for auto-reloading
    server.use(webpackDevMiddleware(webpack(webpackConfig), {
      publicPath: '/build/',
      noInfo: true
    }));
  }

  server.use(serveStatic(publicDir));
  server.set('view engine', 'ejs');
  server.set('views', path.join(__dirname, 'views'));
  server.disable('x-powered-by');

  // mount routes to server
  server.use('/', routes.home);
  server.use('/restaurants', routes.restaurants);

  // not found handler
  server.use(function (req, res) {
    res.status(404).send({ error: 'Not Found' });
  });

  return server;
};
