'use strict';
import React from 'react';

export default class CategoryButton extends React.Component {

  render() {
    return (
      <i className={ `fa ${this.props.iconClass} fa-2x` }></i>
    );
  }

}

CategoryButton.propTypes = {
  iconClass: React.PropTypes.string,
  selected: React.PropTypes.bool,
  onClick: React.PropTypes.func
};
