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

  // Get user's data from sockets server

  componentDidMount () {
    window.socket

      .emit('getData', data => {
        console.info('DATA', data);
        this.setState({ data : data });
      })

      .on('changedData', data => {
        console.info('DATA', data);
        this.setState({ data : data });
      });
  }

  // Move to next step

  nextHandler (e) {
    const { step } = this.state;
    const next = step + 1;

    if ( steps[next] ) {
      this.stepHandler(next);
    }
  }

  // Update state + location with new step

  stepHandler (step, e) {
    if ( e ) {
      e.preventDefault();
    }

    this.setState({ step });

    Link.go(`/step/${step}`);
  }

  // Pass data changes to socket server

  changeHandler (domain, section, value, index) {
    window.socket.emit('changeData', domain, section, value, index);
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
