'use strict';

import React from 'react';

class Summary extends React.Component {
  render () {
    const { household } = this.props;

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <span className="badge">1</span>
            <span> Your household</span>
          </div>

          <div className="panel-body">
            <div className="row">
              <div className="col-xs-4">
                Address
              </div>

              <div className="col-xs-8">
                { household.address }
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                ZIP code
              </div>

              <div className="col-xs-8">
                { household.zip }
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                City
              </div>

              <div className="col-xs-8">
                { household.city }
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                State
              </div>

              <div className="col-xs-8">
                { household.state }
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                Bedrooms
              </div>

              <div className="col-xs-8">
                { household.number_of_bedrooms }
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <span className="badge">2</span>
            <span> People in your household</span>
          </div>

          <div className="panel-body">

          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
