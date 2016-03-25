'use strict';

import React                      from 'react';
import ReactDOM                   from 'react-dom';
import Person                     from './person';
import person                     from '../../data/person.json';

class Persons extends React.Component {

  //----------------------------------------------------------------------------

  state = {
    // persons
    persons : [],

    // current person
    person : 0
  };

  //----------------------------------------------------------------------------

  constructor (props) {
    super(props);

    this.state.persons = this.props.persons;
  }

  //----------------------------------------------------------------------------

  componentWillReceiveProps (props) {
    this.setState({ persons : props.persons });
  }

  // Add a new person

  addPerson () {
    const { persons } = this.state;

    persons.push(Object.assign({}, person));

    this.setState({ persons, person : (persons.length - 1) });
  }

  //----------------------------------------------------------------------------

  viewPerson (person, e) {
    e.preventDefault();

    this.setState({ person });
  }

  //----------------------------------------------------------------------------

  updateHandler (section, value, index) {
    this.props.onChange('persons', section, value, index);
  }

  //----------------------------------------------------------------------------

  render () {
    const breadcrumb = this.state.persons.map((person, index) => {
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

    const persons = this.state.persons.map((person, index) => (
      <Person
        person            =   { person }
        active            =   { index === this.state.person }
        key               =   { index }
        updateHandler     =   { ::this.updateHandler }
        index             =   { index }
      />
    ));

    return (
      <div>
        <ol className="breadcrumb">
          { breadcrumb }
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

export default Persons;
