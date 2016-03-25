'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {

  changeHandler (section) {
    const { index } = this.props;

    const value = ReactDOM.findDOMNode(this.refs[section]).value;

    this.props.updateHandler(section, value, index);
  }

  //----------------------------------------------------------------------------

  render () {
    const { car, active } = this.props;

    const style = {};

    if ( ! active ) {
      style.display = 'none';
    }

    return (
      <div style={ style }>
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
              ref             =   "model"
              onChange        =   {
                this.changeHandler.bind(this, 'model')
              }
              defaultValue    =   { car.model }
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
              max             =   "2016"
              name            =   "year"
              ref             =   "year"
              placeholder     =   "Year"
              className       =   "form-control"
              onChange        =   {
                this.changeHandler.bind(this, 'year')
              }
              defaultValue    =   { car.year }
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
              onChange        =   {
                this.changeHandler.bind(this, 'license_plate')
              }
              defaultValue    =   { car.license_plate }
              ref             =   "license_plate"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Car;
