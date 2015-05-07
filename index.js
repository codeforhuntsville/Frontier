'use strict';
var server = require('./lib/server')();
var config = require('config');
var port = config.get('port');

server.listen(port, function () {
  console.log('listening on port ' + port);
});
