'use strict';

import React from 'react';

class Cars extends React.Component {
  render () {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="model" className="col-xs-2 control-label">
            Model
          </label>

          <div className="col-xs-10">
            <input
              type            =   "text"
              name            =   "model"
              placeholder     =   "Car's model"
              className       =   "form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="year" className="col-xs-2 control-label">
            Year
          </label>

          <div className="col-xs-10">
            <input
              type            =   "number"
              name            =   "year"
              placeholder     =   "Year"
              className       =   "form-control"
              defaultValue    =   "2015"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="license_plate" className="col-xs-2 control-label">
            License plate
          </label>

          <div className="col-xs-10">
            <input
              type            =   "text"
              name            =   "license_plate"
              placeholder     =   "License plate"
              className       =   "form-control"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Cars;
