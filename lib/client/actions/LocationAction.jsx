'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import LocationConstants from '../constants/LocationConstants.jsx';

var LocationActions = {

  update: function() {
    AppDispatcher.dispatch({
      actionType: LocationConstants.LOCATION_UPDATE
    });
  }

};

export default LocationActions;
