// This module exists so that we mock the API in tests.

export default class Geolocation {

  static getCurrentPosition(successCallback, errorCallback, options) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
  }

  static watchPosition(successCallback, errorCallback, options) {
    return navigator.geolocation.watchPosition(successCallback, errorCallback, options);
  }

  static clearWatch(watchId) {
    navigator.geolocation.clearWatch(watchId);
  }

}
