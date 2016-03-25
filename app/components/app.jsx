'use strict';

import React              from 'react';
import StepBar            from './step-bar';
import HouseHold          from './household';
import People             from './people';
import Cars               from './cars';

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
    label : 'Summary'
  }
];

class App extends React.Component {

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

  render () {
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
        <StepBar steps={ steps } step={ step } />

        <div className="panel panel-default" style={{ margin : 80 }}>
          <div className="panel-heading">
            <span className="badge">{ next }</span> { steps[step].label }
          </div>

          <div className="panel-body">
            <View />
          </div>

          <div className="panel-footer text-right">
            { footer }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
