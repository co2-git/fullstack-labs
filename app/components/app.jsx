'use strict';

/*    App - Main Component + Store
 *
 */

import React              from 'react';
import superagent         from 'superagent';
import Link               from 'reacted-link';
import TopBar             from './top-bar';
import OptIn              from './opt-in';
import StepBar            from './step-bar';
import HouseHold          from './household';
import Persons            from './persons';
import Cars               from './cars';
import Summary            from './summary';

// The steps

const steps = [
  {
    label : 'Your household',
    view : HouseHold
  },

  {
    label : 'People in your household',
    view : Persons
  },

  {
    label : 'Your cars',
    view : Cars
  },

  {
    label : 'Summary',
    view : Summary
  }
];

class App extends React.Component {

  state = {
    // current step
    step      :   0,
    data      :   null
  };

  // Constuctor

  constructor (props) {
    super(props);

    // If step is declared in location, use that in state

    const paths = this.props.path.split(/\//);

    if ( paths[2] ) {
      this.state.step = +(paths[2]);
    }
  }

  //----------------------------------------------------------------------------

  componentDidMount () {
    window.socket

      // Get data

      .emit('getData', data => {
        this.setState({ data : data });
      })

      // Push changes

      .on('changedData', data => {
        this.setState({ data : data });
      });
  }

  /** Next Handler - Move to next step
   *
   *  @arg {Event} e
   */

  nextHandler (e) {
    const { step } = this.state;
    const next = step + 1;

    if ( steps[next] ) {
      this.stepHandler(next);
    }
  }

  /** Step Handler - Update state + location with new step
   *
   *  @arg {Number} step
   *  @arg {Event} e
   */

  stepHandler (step, e) {
    if ( e ) {
      e.preventDefault();
    }

    this.setState({ step });

    Link.go(`/step/${step}`);
  }

  /** Change Handler - Pass data changes to socket server
   *
   *  @arg {String} domain
   *  @arg {String} section
   *  @arg mixed value
   *  @arg {Number} index
   */

  changeHandler (domain, section, value, index) {
    window.socket.emit('changeData', domain, section, value, index);
  }

  // Save final changes

  save () {
    window.alert('Thank you!');
  }

  // View

  render () {
    const { user } = this.props;

    // If user not logged in, go to opt-in page

    if ( ! user ) {
      return (
        <div>
          <TopBar user={ this.props.user } />

          <OptIn user={ this.props.user } />
        </div>
      );
    }

    // if no data retrieved from back end, don't show nothing

    if ( ! this.state.data ) {
      return (
        <div>
          <TopBar user={ this.props.user } />
          <div className="container">Loading data...</div>
        </div>
      );
    }

    const { step } = this.state;

    const next = step + 1;

    const View = steps[step].view;

    let footer;

    // If next step, display link to next step

    if ( steps[next] ) {
      footer = (
        <div>
          <button onClick={ ::this.nextHandler }>
            <span
              className           =   "glyphicon glyphicon-menu-right"
              aria-hidden         =   "true"
            />
            Next step
          </button>
          <span> </span>
          <span className="label label-info">{ steps[next].label }</span>
        </div>
      );
    }

    // if no next step, show percentage of fields filled
    // if all fields filled, offer option to save changes

    else {
      let total = 14;

      total += (this.state.data.persons.length - 1) * 5;
      total += (this.state.data.cars.length - 1) * 4;

      let done = 0;

      if ( this.state.data.household.address ) {
        done ++;
      }

      if ( this.state.data.household.zip ) {
        done ++;
      }

      if ( this.state.data.household.city ) {
        done ++;
      }

      if ( this.state.data.household.state ) {
        done ++;
      }

      if ( this.state.data.household.number_of_bedrooms ) {
        done ++;
      }

      this.state.data.persons.forEach(person => {
        if ( person.first_name ) {
          done ++;
        }

        if ( person.last_name ) {
          done ++;
        }

        if ( person.email ) {
          done ++;
        }

        if ( person.age ) {
          done ++;
        }

        if ( person.gender ) {
          done ++;
        }
      });

      this.state.data.cars.forEach(car => {
        if ( car.model ) {
          done ++;
        }

        if ( car.year ) {
          done ++;
        }

        if ( car.license_plate ) {
          done ++;
        }

        if ( car.owner ) {
          done ++;
        }
      });

      const percentage = done / total * 100;

      if ( percentage === 100 ) {
        footer = (
          <button
            className       =   "btn btn-primary"
            onClick         =   { ::this.save }
          >
            Save changes
          </button>
        );
      }
      else {
        footer = (
          <div>{ Math.floor(percentage) }% done</div>
        );
      }
    }

    return (
      <div>
        <TopBar user={ this.props.user } />

        <div className="container">

          <StepBar
            steps         =   { steps }
            step          =   { step }
            stepHandler   =   { ::this.stepHandler }
          />

          <div className="panel panel-default" style={{ margin : 80 }}>
            <div className="panel-heading">
              <span className="badge">{ next }</span> { steps[step].label }
            </div>

            <div className="panel-body">
              <View { ...this.state.data } onChange={ ::this.changeHandler } />
            </div>

            <div className="panel-footer text-right">
              { footer }
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
