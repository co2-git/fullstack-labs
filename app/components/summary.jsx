'use strict';

import React from 'react';

class Summary extends React.Component {
  render () {
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
                -Address-
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                ZIP code
              </div>

              <div className="col-xs-8">
                -ZIP code-
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                City
              </div>

              <div className="col-xs-8">
                -City-
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                State
              </div>

              <div className="col-xs-8">
                -State-
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                Bedrooms
              </div>

              <div className="col-xs-8">
                -Bedrooms-
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
