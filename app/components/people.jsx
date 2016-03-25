'use strict';

import React from 'react';

class Person extends React.Component {
  render () {
    const { person, active } = this.props;

    const style = {};

    if ( ! active ) {
      style.display = 'none';
    }

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
      </div>
    );
  }
}

class People extends React.Component {
  state = {
    people : [],
    person : 0
  };

  constructor (props) {
    super(props);

    console.log(this.props);

    this.state.people = this.props.persons;
  }

  addPerson () {
    const { people } = this.state;

    people.push(Object.assign({}, person));

    this.setState({ people, person : (people.length - 1) });
  }

  viewPerson (person, e) {
    e.preventDefault();

    this.setState({ person });
  }

  render () {
    const people = this.state.people.map((people, index) => {
      if ( index === this.state.person ) {
        return (
          <li key={ index } className="active">
            Person #{ index + 1 }
          </li>
        );
      }
      else {
        return (
          <li key={ index }>
            <a
              href        =   "#"
              onClick     =   { this.viewPerson.bind(this, index) }
            >
              Person #{ index + 1 }
            </a>
          </li>
        );
      }
    });

    const persons = this.state.people.map((people, index) => (
      <Person
        person            =   { people }
        active            =   { index === this.state.person }
        key               =   { index }
      />
    ));

    return (
      <div>
        <ol className="breadcrumb">
          { people }
          <li>
            <span
              className       =   "badge"
              onClick         =   { ::this.addPerson }
              style           =   {{ cursor : 'pointer' }}
            >+</span>
          </li>
        </ol>

        <form className="form-horizontal">
          { persons }
        </form>
      </div>
    );
  }
}

export default People;
