'use strict';
var server = require('./lib/server/')();
var config = require('config');

function ngrokIsAvailable() {
  try {
    require.resolve('ngrok');
    return true;
  } catch (e) {
    return false;
  }
}

if (config.isValid()) {
  var port = config.get("port") || 8080;
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
}
else {
  config.getConfigValidityReport().errors.forEach(function(error){
    console.log(error);
  });
  console.error("\n\nInvalid configuration detected.  Aborted server startup.\n");
  return;
}

