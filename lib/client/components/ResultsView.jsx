'use strict';
import React from 'react';
import NavHeader from './NavHeader.jsx';
import ResultList from './ResultList.jsx'

var getResultsState = function () {
  // TODO get list store/s
};

export default class ResultsView extends React.Component {

  constructor(props) {
    super(props);

    this.state = getResultsState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    // listen to store/s
  }

  componentWillUnmount() {
    // unlisten to store/s
  }

  _onChange() {
    this.setState(getResultsState());
  }

  render() {
    return (
      <div>
        <NavHeader></NavHeader>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 inner-page">
              <div className="row">
                <div className="col-xs-12 list-view">
                  <ul>
                    <li>
                      <ResultList></ResultList>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 map-view">
                  <button className="btn btn-primary btn-block">
                    Map View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
