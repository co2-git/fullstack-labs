'use strict';

import React from 'react';

class HouseHold extends React.Component {
  render () {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="address" className="col-xs-2 control-label">
            Address
          </label>

          <div className="col-xs-10">
            <input
              type            =   "text"
              name            =   "address"
              placeholder     =   "Your address"
              className       =   "form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="zip" className="col-xs-2 control-label">
            ZIP Code
          </label>

          <div className="col-xs-10">
            <input
              type            =   "text"
              name            =   "zip"
              placeholder     =   "Your ZIP code"
              className       =   "form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="city" className="col-xs-2 control-label">
            City
          </label>

          <div className="col-xs-10">
            <input
              type            =   "text"
              name            =   "city"
              placeholder     =   "Your city"
              className       =   "form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="state" className="col-xs-2 control-label">
            State
          </label>

          <div className="col-xs-10">
            <input
              type            =   "text"
              name            =   "state"
              placeholder     =   "Your state"
              className       =   "form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label
            htmlFor           =   "number_of_bedrooms"
            className         =   "col-xs-2 control-label"
          >
            Bedrooms
          </label>

          <div className="col-xs-10">
            <input
              type            =   "number"
              name            =   "number_of_bedrooms"
              placeholder     =   "Number of bedrooms"
              className       =   "form-control"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default HouseHold;
