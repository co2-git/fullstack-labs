'use strict';

import React              from 'react';
import StepBar            from './step-bar';

class App extends React.Component {

  state = {
    step : 0
  };

  render () {
    const { step } = this.state;

    return (
      <div>
        <StepBar step={ step } />
      </div>
    );
  }
}

export default App;
