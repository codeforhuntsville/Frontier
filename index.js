'use strict';
var server = require('./lib/server/')();
var config = require('config');
var port = config.get('port');

function ngrokIsAvailable() {
  try {
    require.resolve('ngrok');
    return true;
  } catch (e) {
    return false;
  }
}

server.listen(port, function () {
  console.log('listening on port ' + port);

  if (process.env.NODE_ENV === 'development' && ngrokIsAvailable()) {
    require('ngrok').connect(port, function (err, url) {
      if (err) {
        console.error('ngrok error', err);
        return;
      }

      console.log('publicly accessible https url is: ' + url);
    });
  }
});
