'use strict';
var express = require('express');
var router = express.Router();
var request = require('request');
var googleApiKey = require('config').get('googlePlacesApiKey');
var myLatitude;
var myLongitude;

/**
 * Given the specified latitude and longitude, give me back
 * nearby restaurants within a 1 mile radius
 *
 * requires query params:
 *   latitude
 *   longitude
 */
router.get('/', function (req, res) {
  if (!req.query.latitude || !req.query.longitude) {
    res.status(400).send({
      error: 'bad request',
      statusCode: 400,
      description: 'latitude and longitude are both required query params'
    });
    return;
  }

  var location = req.query.latitude + ',' + req.query.longitude;

  myLatitude = req.query.latitude;
  myLongitude = req.query.longitude;

  var requestOptions = {
    url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    qs: {
      key: googleApiKey,
      location: location,
      radius: 1600,
      type: 'restaurant'
    },
    json: true
  };

  request.get(requestOptions, function (err, response, body) {
    var restaurants = [];
    var results;
    var result;

    if (err) {
      res.status(500).send({
        error: 'internal server error',
        statusCode: 500,
        description: 'An error occurred looking up restaurant information'
      });
      return;
    }

    results = body.results;

    if (!results || !Array.isArray(results)) {
      res.send([]);
      return;
    }

    for (var i = 0; i < 10; i++) {
      result = results[i];
      if (!result) {
        break;
      }

      /* Compute distance from lat/lon using Haversine Formula */
      var deg2rad = Math.PI/180;
      var dlon = deg2rad*myLongitude - deg2rad*result.geometry.location.lng;
      var dlat = deg2rad*myLatitude - deg2rad*result.geometry.location.lat;

      var a = (Math.sin(dlat/2))*(Math.sin(dlat/2)) + Math.cos(deg2rad*result.geometry.location.lat) * Math.cos(deg2rad*myLatitude) * (Math.sin(dlon/2))*(Math.sin(dlon/2));

      var c = 2 * Math.atan2( Math.sqrt(a), Math.sqrt(1-a) );

      /* Consider I18N here */
      var earth_radius_miles = 3959;
      var d = earth_radius_miles * c;
      var dUnits = " miles";
      if (d<0) {
        d=0.0;
      }
      if (d<0.1) {
        d = Math.round(5280 * d);
        dUnits = " feet";
      } else {
        d = Math.round(10*d)/10;
      }

      restaurants.push({
        id: result.id,
        name: result.name + "[" + result.vicinity + "], " + d + dUnits + " away."
      });

    }

    res.send(restaurants);
  });
});

module.exports = router;
