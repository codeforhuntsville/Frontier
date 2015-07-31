'use strict';
import React from 'react';

export default class ResultModal extends React.Component {
  render() {
    return (
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <i className="fa fa-times-circle"></i>
              </button>
              <div className="modal-title">
                <i className="fa fa-cutlery fa-2x"></i>

                <h3 className="modal-title">Cotton Row</h3>
              </div>
            </div>
            <div className="modal-body">
              <ul className="address">
                <li>6275 University Dr NW</li>
                <li>Huntsville, AL</li>
                <li>(256) 922-0189</li>
              </ul>
              <ul className="bullets">
                <li>Open now til 11pm</li>
                <li>Accepts Reservations</li>
                <li>
                  <span>Health Rating:</span>
                  <ul className="modal-icons stars">
                    <li>
                      <i className="fa fa-star fa-2x"></i>
                    </li>
                    <li>
                      <i className="fa fa-star fa-2x"></i>
                    </li>
                    <li>
                      <i className="fa fa-star fa-2x"></i>
                    </li>
                    <li>
                      <i className="fa fa-star fa-2x"></i>
                    </li>
                    <li>
                      <i className="fa fa-star-o fa-2x"></i>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Yelp Rating:</span>
                  <ul className="modal-icons stars">
                    <li><i className="fa fa-star fa-2x"></i>
                    </li>
                    <li><i className="fa fa-star fa-2x"></i>
                    </li>
                    <li><i className="fa fa-star fa-2x"></i>
                    </li>
                    <li><i className="fa fa-star fa-2x"></i>
                    </li>
                    <li><i className="fa fa-star fa-2x"></i>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Price:</span>
                  <ul className="modal-icons dollars">
                    <li><i
                      className="fa fa-dollar fa-2x"></i>
                    </li>
                    <li><i
                      className="fa fa-dollar fa-2x"></i>
                    </li>
                    <li><i
                      className="fa fa-dollar fa-2x"></i>
                    </li>
                    <li><i
                      className="fa fa-dollar fa-2x"></i>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button"
                      className="btn btn-primary btn-block">
                View
                on Map
              </button>
              <button type="button"
                      className="btn btn-primary btn-block">
                Get
                Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
