'use strict';

import React                      from 'react';
import ReactDOM                   from 'react-dom';
import Person                     from './person';
import person                     from '../../data/person.json';

class Persons extends React.Component {

  //----------------------------------------------------------------------------

  state = {
    // persons (from user's data)
    people : [],

    // current person
    person : 0
  };

  //----------------------------------------------------------------------------

  constructor (props) {
    super(props);

    this.state.people = this.props.persons;
  }

  //----------------------------------------------------------------------------

  componentWillReceiveProps (props) {
    this.setState({ people : props.persons });
  }

  // Add a new person

  addPerson () {
    const { people } = this.state;

    people.push(Object.assign({}, person));

    this.setState({ people, person : (people.length - 1) });
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
        updateHandler     =   { ::this.updateHandler }
        index             =   { index }
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

export default Persons;
