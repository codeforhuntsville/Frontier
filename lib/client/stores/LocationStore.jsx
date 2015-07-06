'use strict';

import { EventEmitter }from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import LocationConstants from '../constants/LocationConstants.jsx';

var _location = {
  lat: 0,
  lon: 0,
  error: ''
};

var update = function() {
  navigator.geolocation.getCurrentPosition(
    geo => {
      _location.lat = geo.coords.latitude;
      _location.lon = geo.coords.longitude;
      _location.error = '';
    },
    () => {
      _location.lat = null;
      _location.lon = null;
      _location.error = 'Could not get your location';
    }
  );
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

AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case LocationConstants.LOCATION_UPDATE:
      update().then(
        LocationStore.emitChange(),
        LocationStore.emitChange()
      );

    default:
  };

});

export default LocationStore;

