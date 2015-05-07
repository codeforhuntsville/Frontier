;(function () {
  /* global fetch: false */
  'use strict';

  function getJson(response) {
    return response.json();
  }

  function getStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    throw new Error(response.statusText);
  }

  function getRestaurants(coords) {
    var fetchUrl = '/restaurants?latitude=' + coords.latitude + '&longitude=' + coords.longitude;
    return fetch(fetchUrl);
  }

  var $status = document.getElementById('status');

  if (!navigator.geolocation) {
    $status.innerHTML = 'geolocation is not supported on this platform';
    return;
  }

  $status.innerHTML = 'retrieving your location...';
  navigator.geolocation.getCurrentPosition(function (position) {
    $status.innerHTML = 'your location is: lat(' + position.coords.latitude + '), lon(' + position.coords.longitude + ')';
    console.log('Geolocation position', position);

    getRestaurants(position.coords)
      .then(getStatus)
      .then(getJson)
      .then(function (restaurants) {
        $status.innerHTML = restaurants.map(function (r) {
          return r.name + '<br />';
        }).join('');
      }).catch(function (err) {
        $status.innerHTML = 'Error retrieving restaurants<br />' + err;
      });

  }, function (error) {
    $status.innerHTML = 'location could not be retrieved.';
    console.error('Geolocation error', error);
  });
})();
