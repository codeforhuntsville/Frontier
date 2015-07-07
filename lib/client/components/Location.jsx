'use strict';
import React from 'react';
import LocationActions from '../actions/LocationActions.jsx';
import LocationStore from '../stores/LocationStore.jsx';

var getLocationState = function () {
  return LocationStore.getState();
};

export default class Location extends React.Component {

  constructor(props) {
    super(props);

    this.state = getLocationState();
    this._onChange = this._onChange.bind(this);
  }

  handleClick() {
    LocationActions.locationUpdate();
  }

  componentDidMount() {
    LocationStore.listen(this._onChange);
  }

  componentWillUnmount() {
    LocationStore.unlisten(this._onChange);
  }

  _onChange() {
    this.setState(getLocationState());
  }

  render() {
    return (
      <div className="col-xs-12">
        <input disabled style={{ width: '90%', display: 'inline-block' }}
               className="form-control"
               placeholder="Enter an address..."
               value={ this.state.location.locationString }/>
        <i
          style={{ height: '32px', display: 'inline-block', verticalAlign: 'bottom', marginLeft: '5px' }}
          className="fa fa-compass fa-2x" onClick={ this.handleClick }></i>
        { this.state.error ? <p>{ this.state.location.error }</p> : null }
      </div>
    );
  }
}
