'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var compress = require('compression');
var cors = require('cors');
var path = require('path');
var serveStatic = require('serve-static');
var routes = require('./routes');
var publicDir = path.resolve(__dirname, '../public');

module.exports = function () {
  var server = express();

  // configuration and global middleware
  server.use(cors());
  server.use(bodyParser.json());
  server.use(compress());
  server.use(serveStatic(publicDir));
  server.disable('x-powered-by');

  // mount routes to server
  server.use('/', routes.home);

  // not found handler
  server.use(function (req, res) {
    res.status(404).send({ error: 'Not Found' });
  });

  return server;
};
