var path = require.requireActual('../Geolocation');

var geoMock = jest.genMockFromModule('../Geolocation');

var _coords = null;
var _enabled = false;
function __setLocation(lat, lon) {
  _enabled = true;
  _coords = { latitude: lat, longitude: lon };
}

function __enable() {
  _enabled = true;
}

function __disable() {
  _coords = null;
  _enabled = false;
}

function getCurrentPosition(successCallback, errorCallback) {
  if(_enabled) {
    if(_coords) {
      successCallback({ coords: _coords });
    }
    else {
      errorCallback();
    }
  }
}

geoMock.getCurrentPosition.mockImplementation(getCurrentPosition);
geoMock.__enable = __enable;
geoMock.__disable = __disable;
geoMock.__setLocation = __setLocation;

module.exports = geoMock;
