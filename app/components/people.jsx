'use strict';

import React from 'react';

class People extends React.Component {
  render () {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="first_name" className="col-xs-2 control-label">
            First name
          </label>

          <div className="col-xs-10">
            <input
              type            =   "text"
              name            =   "first_name"
              placeholder     =   "First name"
              className       =   "form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="last_name" className="col-xs-2 control-label">
            Last name
          </label>

          <div className="col-xs-10">
            <input
              type            =   "text"
              name            =   "last_name"
              placeholder     =   "Last name"
              className       =   "form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="col-xs-2 control-label">
            Email
          </label>

          <div className="col-xs-10">
            <input
              type            =   "email"
              name            =   "email"
              placeholder     =   "Email"
              className       =   "form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="age" className="col-xs-2 control-label">
            Age
          </label>

          <div className="col-xs-10">
            <input
              type            =   "number"
              name            =   "age"
              placeholder     =   "Age"
              className       =   "form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="gender" className="col-xs-2 control-label">
            Gender
          </label>

          <div className="col-xs-10">
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default">Male</button>
              <button type="button" className="btn btn-default">Female</button>
              <button type="button" className="btn btn-default">Other</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default People;
