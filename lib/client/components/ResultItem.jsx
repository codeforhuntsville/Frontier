'use strict';
import React from 'react';
import ResultModal from './ResultModal.jsx';

export default class ResultItem extends React.Component {
  render() {
    return (
      <div>
        <div className="left">
          <h3>Cotton Row</h3>

          <p>0.2 miles away</p>
        </div>
        <div className="right">
          <a href="#" data-toggle="modal" data-target="#myModal">
            <i className="fa fa-info-circle fa-2x"></i>
          </a>
        </div>
        <ResultModal></ResultModal>
      </div>
    );
  }
}
