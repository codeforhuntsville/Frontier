'use strict';

import { EventEmitter }from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import LocationConstants from '../constants/LocationConstants.jsx';

var _location = {
  lat: null,
  lon: null,
  locationString: '',
  error: ''
};

var CHANGE_EVENT = 'change';

var LocationStore = Object.assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getLocation() {
    return _location;
  }
});

AppDispatcher.register(function (action) {

  switch (action.actionType) {
    case LocationConstants.LOCATION_UPDATE:
      navigator.geolocation.getCurrentPosition(
          geo => {
          _location.lat = geo.coords.latitude;
          _location.lon = geo.coords.longitude;
          _location.locationString = `${_location.lat}, ${_location.lon}`;
          _location.error = '';
          LocationStore.emitChange();

        },
        () => {
          _location.lat = null;
          _location.lon = null;
          _location.locationString = '';
          _location.error = 'Could not get your location';
          LocationStore.emitChange();
        }
      );

    default:
  }
  ;

});

export default LocationStore;

