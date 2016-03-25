'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class HouseHold extends React.Component {

  updateHandler (section) {
    const input = ReactDOM.findDOMNode(this.refs[section]);
    this.props.onChange('household', section, input.value);
  }

  render () {
    const { household } = this.props;

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
              ref             =   "address"
              placeholder     =   "Your address"
              className       =   "form-control"
              defaultValue    =   { household.address }
              onChange        =   { this.updateHandler.bind(this, 'address') }
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
              ref             =   "zip"
              placeholder     =   "Your ZIP code"
              className       =   "form-control"
              defaultValue    =   { household.zip }
              onChange        =   { this.updateHandler.bind(this, 'zip') }
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
              ref             =   "city"
              placeholder     =   "Your city"
              className       =   "form-control"
              defaultValue    =   { household.city }
              onChange        =   { this.updateHandler.bind(this, 'city') }
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
              ref             =   "state"
              placeholder     =   "Your state"
              defaultValue    =   { household.state }
              className       =   "form-control"
              onChange        =   { this.updateHandler.bind(this, 'state') }
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
              ref             =   "number_of_bedrooms"
              placeholder     =   "Number of bedrooms"
              defaultValue    =   { household.number_of_bedrooms }
              className       =   "form-control"
              onChange        =   { this.updateHandler.bind(this, 'number_of_bedrooms') }
            />
          </div>
        </div>
      </form>
    );
  }
}

export default HouseHold;
