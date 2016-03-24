'use strict';

import React from 'react';

class StepBar extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-xs-3 text-center">
          <span className="badge">1</span> Your household
        </div>

        <div className="col-xs-3 text-center">
          <span className="badge">2</span> People in your household
        </div>

        <div className="col-xs-3 text-center">
          <span className="badge">3</span> Cars in your household
        </div>

        <div className="col-xs-3 text-center">
          <span className="badge">4</span> Summary
        </div>
      </div>
    );
  }
}

export default StepBar;
