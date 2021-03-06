'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Person extends React.Component {

  changeHandler (section, value, e) {
    const { index } = this.props;

    if ( ! value ) {
      value = ReactDOM.findDOMNode(this.refs[section]).value;
    }

    this.props.updateHandler(section, value, index);
  }

  render () {
    const { person, active } = this.props;

    const style = {};

    if ( ! active ) {
      style.display = 'none';
    }

    let gender = {
      male    :   person.gender === 'male' ? 'primary' : 'default',
      female  :   person.gender === 'female' ? 'primary' : 'default',
      other   :   person.gender === 'other' ? 'primary' : 'default'
    };

    return (
      <div style={ style }>
        <div className="form-group">
          <label htmlFor="first_name" className="col-xs-2 control-label">
            First name
          </label>

          <div className="col-xs-10">
            <input
              type            =   "text"
              name            =   "first_name"
              ref             =   "first_name"
              placeholder     =   "First name"
              className       =   "form-control"
              defaultValue    =   { person.first_name }
              onChange        =   {
                this.changeHandler.bind(this, 'first_name', null)
              }
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
              ref             =   "last_name"
              placeholder     =   "Last name"
              className       =   "form-control"
              defaultValue    =   { person.last_name }
              onChange        =   {
                this.changeHandler.bind(this, 'last_name', null)
              }
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
              ref             =   "email"
              placeholder     =   "Email"
              className       =   "form-control"
              defaultValue    =   { person.email }
              onChange        =   {
                this.changeHandler.bind(this, 'email', null)
              }
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
              ref             =   "age"
              placeholder     =   "Age"
              className       =   "form-control"
              defaultValue    =   { person.age }
              onChange        =   {
                this.changeHandler.bind(this, 'age', null)
              }
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="gender" className="col-xs-2 control-label">
            Gender
          </label>

          <div className="col-xs-10">
            <div className="btn-group" role="group" aria-label="...">
              <button
                type          =   "button"
                data-gender   =   "male"
                className     =   { `gender btn btn-${gender.male}` }
                onClick       =   {
                  this.changeHandler.bind(this, 'gender', 'male')
                }
              >
                Male
              </button>

              <button
                type          =   "button"
                data-gender   =   "female"
                className     =   { `gender btn btn-${gender.female}` }
                onClick       =   {
                  this.changeHandler.bind(this, 'gender', 'female')
                }
              >
                Female
              </button>

              <button
                type          =   "button"
                data-gender   =   "other"
                className     =   { `gender btn btn-${gender.other}` }
                onClick       =   {
                  this.changeHandler.bind(this, 'gender', 'other')
                }
              >
                Other
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Person;
