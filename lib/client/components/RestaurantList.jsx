'use strict';
import React from 'react';

let loadingStates = {
  REQUESTING_LOCATION: Symbol('REQUESTING_LOCATION'),
  LOADING_DATA: Symbol('LOADING_DATA'),
  FINISHED: Symbol('FINISHED')
};

function getRestaurants(coords) {
  var fetchUrl = '/restaurants?latitude=' + coords.latitude + '&longitude=' + coords.longitude;
  return fetch(fetchUrl)
    .then((response) => {
      // handle any errors
      if (!response.ok) {
        return response.json().then((errorBody) => {
          throw new Error(errorBody.description || 'An error occurred while fetching restaurants');
        });
      }

      // no errors, parse response json
      return response.json();
    });
}

export default class RestaurantList extends React.Component {

  constructor() {
    super();

    // initial state
    this.state = {
      loadingState: loadingStates.REQUESTING_LOCATION,
      restaurants: [],
      error: null
    };
  }

  componentDidMount() {
    let mergeState = (state) => {
      this.setState(Object.assign(this.state, state));
    };

    let finished = (state) => {
      this.setState(Object.assign(this.state, { loadingState: loadingStates.FINISHED }, state));
    };

    navigator.geolocation.getCurrentPosition((position) => {
      mergeState({ loadingState: loadingStates.LOADING_DATA });
      getRestaurants(position.coords)
        .then((restaurants) => {
          finished({ restaurants: restaurants });
        }).catch((err) => {
          finished({ error: err });
        });
    }, (err) => {
      finished({ error: err });
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="error">
          An error has occurred: {this.state.error}
        </div>
      );
    }

    if (this.state.loadingState !== loadingStates.FINISHED) {
      let loadingMessage = (this.state.loadingState === loadingStates.REQUESTING_LOCATION ?
        "Requesting Location" : "Loading Restaurants");
      return <div className="loading">{loadingMessage}...</div>;
    }

    // finished and not an error...
    let restaurants = this.state.restaurants.map((r) => {
      return <div className="restaurant" key={r.id}>{r.name}</div>;
    });

    return (
      <div className="restaurantList">
        <h3>{restaurants.length} restaurants found</h3>
        {restaurants}
      </div>
    )
  };
};
