'use strict';
import React from 'react';
import Location from './Location.jsx';
import CategoryList from './CategoryList.jsx';
import Slider from './Slider.jsx';

export default class HomeView extends React.Component {

  render() {
    const categories = [
      { iconClass: 'fa-cutlery' },
      { iconClass: 'fa-wifi' },
      { iconClass: 'fa-hotel' },
      { iconClass: 'fa-beer' }
    ];

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h2>Frontier</h2>
            <p>Discover places and events nearby</p>
            <div className="row">
              <Location />
            </div>
            <div className="row">
              <CategoryList categories={ categories }/>
            </div>
            <div className="row">
              <Slider minValue={ 0 } maxValue={ 20 } stepSize={ 5 } units="miles" />
            </div>
            <div className="row">
              <div className="col-xs-12">
                <button className="btn btn-primary btn-block">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
