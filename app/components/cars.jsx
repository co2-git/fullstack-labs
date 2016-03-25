'use strict';

import React                from 'react';
import Car                  from './car';
import car                  from '../../data/car.json';

class Cars extends React.Component {

  //----------------------------------------------------------------------------

  state = {
    // cars
    cars : [],

    // current car
    car : 0
  };

  //----------------------------------------------------------------------------

  constructor (props) {
    super(props);

    this.state.cars = this.props.cars;
  }

  //----------------------------------------------------------------------------

  componentWillReceiveProps (props) {
    this.setState({ cars : props.cars });
  }

  // Add a new car

  addCar () {
    const { cars } = this.state;

    cars.push(Object.assign({}, car));

    this.setState({ cars, car : (cars.length - 1) });
  }

  //----------------------------------------------------------------------------

  viewCar (car, e) {
    e.preventDefault();

    this.setState({ car });
  }

  //----------------------------------------------------------------------------

  updateHandler (section, value, index) {
    this.props.onChange('cars', section, value, index);
  }

  //----------------------------------------------------------------------------

  render () {
    const breadcrumb = this.state.cars.map((car, index) => {
      if ( index === this.state.car ) {
        return (
          <li key={ index } className="active">
            Car #{ index + 1 }
          </li>
        );
      }
      else {
        return (
          <li key={ index }>
            <a
              href        =   "#"
              onClick     =   { this.viewCar.bind(this, index) }
            >
              Car #{ index + 1 }
            </a>
          </li>
        );
      }
    });

    const cars = this.state.cars.map((car, index) => (
      <Car
        car               =   { car }
        active            =   { index === this.state.car }
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
              onClick         =   { ::this.addCar }
              style           =   {{ cursor : 'pointer' }}
            >+</span>
          </li>
        </ol>

        <form className="form-horizontal">
          { cars }
        </form>
      </div>
    );
  }
}

export default Cars;
