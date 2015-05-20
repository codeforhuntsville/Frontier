'use strict';
var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config');

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
  var googleApiKey = config.get('googlePlacesApiKey');

  if (!googleApiKey) {
    res.status(500).send({
      error: 'internal server error',
      statusCode: 500,
      description: 'server not configured for restaurant lookup'
    });
    return;
  }

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

      restaurants.push({
        id: result.id,
        name: result.name
      });
    }

    res.send(restaurants);
  });
});

module.exports = router;
