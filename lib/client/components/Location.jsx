'use strict';
import React from 'react';
import LocationAction from '../actions/LocationAction.jsx';
import LocationStore from '../stores/LocationStore.jsx';

var getLocationState = function() {
  return LocationStore.getLocation();
};

export default class Location extends React.Component {

  constructor(props) {
    super(props);

    this.state = getLocationState();
  }

  handleClick() {
    LocationAction.update();
  }

  componentDidMount() {
    LocationStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    LocationStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getLocationState());
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
