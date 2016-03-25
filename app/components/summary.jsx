'use strict';

import React from 'react';

class Summary extends React.Component {
  render () {
    const { household, persons, cars } = this.props;

    const personsPanel = persons.map((person, index) => (
      <div className="panel panel-default" key={ index }>
        <div className="panel-heading">
          Person #{ index + 1 }
        </div>

        <div className="panel-body">
          <div className="row">
            <div className="col-xs-4">
              First name
            </div>

            <div className="col-xs-8">
              { person.first_name }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-4">
              Last name
            </div>

            <div className="col-xs-8">
              { person.last_name }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-4">
              Email
            </div>

            <div className="col-xs-8">
              { person.email }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-4">
              Age
            </div>

            <div className="col-xs-8">
              { person.age }
            </div>
          </div>

          <div className="row">
            <div className="col-xs-4">
              Gender
            </div>

            <div className="col-xs-8">
              { person.gender }
            </div>
          </div>
        </div>
      </div>
    ));

    const carsPanel = cars.map((car, index) => {
      let owner;

      if ( car.owner ) {
        owner = this.props.persons.reduce(
          (owner, person) => {
            if ( person.id === +(car.owner) ) {
              owner = person;
            }
            return owner;
          },
          null
        );

        if ( owner ) {
          owner = `${owner.first_name} ${owner.last_name}`;
        }
      }

      return (
        <div className="panel panel-default" key={ index }>
          <div className="panel-heading">
            Car #{ index + 1 }
          </div>

          <div className="panel-body">
            <div className="row">
              <div className="col-xs-4">
                Model
              </div>

              <div className="col-xs-8">
                { car.model }
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                Year
              </div>

              <div className="col-xs-8">
                { car.year }
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                License plate
              </div>

              <div className="col-xs-8">
                { car.license_plate }
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                Owner
              </div>

              <div className="col-xs-8">
                { owner }
              </div>
            </div>
          </div>
        </div>
      );
    });

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
                { household.address }
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                ZIP code
              </div>

              <div className="col-xs-8">
                { household.zip }
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                City
              </div>

              <div className="col-xs-8">
                { household.city }
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                State
              </div>

              <div className="col-xs-8">
                { household.state }
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                Bedrooms
              </div>

              <div className="col-xs-8">
                { household.number_of_bedrooms }
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
            { personsPanel }
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <span className="badge">3</span>
            <span> Your cars</span>
          </div>

          <div className="panel-body">
            { carsPanel }
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
