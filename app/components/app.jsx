'use strict';

import React              from 'react';
import superagent         from 'superagent';
import TopBar             from './top-bar';
import OptIn              from './opt-in';
import StepBar            from './step-bar';
import HouseHold          from './household';
import People             from './people';
import Cars               from './cars';
import Summary            from './summary';

const steps = [
  {
    label : 'Your household',
    view : HouseHold
  },

  {
    label : 'People in your household',
    view : People
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

  data = {
    household : {
      address : null
    }
  };

  state = {
    step : 0
  };

  nextHandler (e) {
    const { step } = this.state;
    const next = step + 1;

    if ( steps[next] ) {
      this.setState({ step : next });
    }
  }

  stepHandler (step, e) {
    if ( e ) {
      e.preventDefault();
    }

    this.setState({ step });
  }

  changeHandler (domain, section, value) {
    window.socket.emit('changeData', domain, section, value);
  }

  render () {
    const { user } = this.props;

    if ( ! user ) {
      return (
        <div>
          <TopBar user={ this.props.user } />

          <OptIn user={ this.props.user } />
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
    else {
      footer = (
        <div>
          <button className="btn btn-primary">Submit</button>
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
              <View { ...this.data } onChange={ ::this.changeHandler } />
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
