'use strict';
var server = require('./lib/server')();
var config = require('config');
var port = config.get('port');

server.listen(port, function () {
  console.log('listening on port ' + port);

  if (process.env.NODE_ENV === 'debug') {
    require('ngrok').connect(port, function (err, url) {
      if (err) {
        console.error('ngrok error', err);
        return;
      }

      console.log('publicly accessible https url is: ' + url);
    });
  }
});
