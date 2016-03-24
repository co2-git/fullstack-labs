'use strict';

import React              from 'react';
import StepBar            from './step-bar';
import HouseHold          from './household';

class App extends React.Component {

  state = {
    step : 0
  };

  render () {
    const { step } = this.state;

    return (
      <div>
        <StepBar step={ step } />

        <HouseHold />
      </div>
    );
  }
}

export default App;
