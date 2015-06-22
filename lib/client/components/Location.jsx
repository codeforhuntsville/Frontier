'use strict';
import React from 'react';
var Geolocation = require('../util/Geolocation');

export default class Location extends React.Component {

  constructor(props) {
    super(props);

    this.state = { location: null, lat: 0, lon: 0, error: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ location: 'Fetching location...', error: '' });

    Geolocation.getCurrentPosition(
      geo => {
        const lat = geo.coords.latitude;
        const lon = geo.coords.longitude;

        this.setState({ lat, lon, location: `${lat.toFixed(4)}, ${lon.toFixed(4)}`, error: '' });
      },
      () => {
        this.setState({ location: null, lat: 0, lon: 0, error: 'Could not get your location' });
      });
  }

  render() {
    return (
      <div className="col-xs-12">
        <input disabled style={{ width: '90%', display: 'inline-block' }} className="form-control"
          placeholder="Enter an address..." value={ this.state.location } />
        <i style={{ height: '32px', display: 'inline-block', verticalAlign: 'bottom', marginLeft: '5px' }}
           className="fa fa-compass fa-2x" onClick={ this.handleClick }></i>
         { this.state.error ? <p>{ this.state.error }</p> : null }
      </div>
    );
  }
}
