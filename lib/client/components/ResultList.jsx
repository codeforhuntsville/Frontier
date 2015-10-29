'use strict';
import React from 'react';
import ResultItem from './ResultItem.jsx';

export default class ResultList extends React.Component {

  render() {
    return (
      <li>
        <div className="list-title">
          <i className="fa fa-cutlery fa-2x"></i>
          <h2>Restaurants</h2>
        </div>
        <ul>
          <li><ResultItem></ResultItem></li>
          <li><ResultItem></ResultItem></li>
          <li><ResultItem></ResultItem></li>
        </ul>
      </li>
    );
  }
};
