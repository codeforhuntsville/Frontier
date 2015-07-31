'use strict';
import React from 'react';

export default class NavHeader extends React.Component {

  render() {
    return (
      <header>
        <a href="/" className="search">
          <i className="fa fa-search fa-2x"></i>
        </a>
        <a href="#" className="feedback">
          <i className="fa fa-comments-o fa-2x"></i>
        </a>
        <h1>Frontier</h1>
      </header>
    );
  }
};
