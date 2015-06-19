'use strict';
import React from 'react';

export default class Slider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }

  render() {
    return (
      <div className="col-xs-12">
        <h3>Distance</h3>
        <input
          id="distance"
          type="range"
          min={ this.props.minValue }
          max={ this.props.maxValue }
          value={ this.state.value }
          step={ this.props.stepSize }
          onChange={ this.handleChange }
          onInput={ this.handleChange }
        />
        <p>0 - { this.state.value == "0" ? 1 : this.state.value } { this.props.units }</p>
      </div>
    );
  }
}

Slider.propTypes = {
  units: React.PropTypes.string,
  value: React.PropTypes.number,
  minValue: React.PropTypes.number,
  maxValue: React.PropTypes.number,
  stepSize: React.PropTypes.number,
  onValueChanged: React.PropTypes.func
};
