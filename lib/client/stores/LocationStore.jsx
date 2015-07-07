'use strict';

import alt from '../alt.js';
import LocationActions from '../actions/LocationActions.jsx';

class LocationStore {
  constructor() {
    this.location = {
      lat: null,
      lon: null,
      locationString: '',
      error: ''
    };

    this.bindListeners({
      handleUpdate: LocationActions.LOCATION_UPDATE
    });
  }

  handleUpdate() {
    navigator.geolocation.getCurrentPosition(
        geo => {
        var lat = geo.coords.latitude;
        var lon = geo.coords.longitude;
        this.location = {
          lat,
          lon,
          locationString: `${lat}, ${lon}`,
          error: ''
        };
        this.emitChange();
      },
      () => {
        this.location = {
          lat: null,
          lon: null,
          locationString: '',
          error: 'Could not get your location'
        };
        this.emitChange();
      }
    );
    return false;
  }
}

export default alt.createStore(LocationStore, 'LocationStore');
