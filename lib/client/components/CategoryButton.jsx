'use strict';

import React from 'react';
import { Component, PropTypes } from 'react';

export default class CategoryButton extends Component {

  constructor(...args) {
    super(...args);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick, category } = this.props;
    onClick(category);
  }

  render() {
    const { category } = this.props;
    let className = `fa ${category.iconClass} fa-2x`;
    if (category.selected) {
      className += ' selected';
    }

    return (
      <i className={ className } onClick={ this.handleClick }></i>
    );
  }
}

CategoryButton.propTypes = {
  category: PropTypes.object,
  onClick: PropTypes.func
};
