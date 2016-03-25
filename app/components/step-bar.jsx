'use strict';

import React from 'react';

class StepBar extends React.Component {
  stepHandler (step, e) {
    e.preventDefault();
    this.props.stepHandler(step);
  }

  render () {
    const { steps } = this.props;

    const content = steps.map((step, index) => {
      const stepIndex = index + 1;

      const args = {
        key     :   index,
        role    :   'presentation'
      };

      if ( index === this.props.step ) {
        args.className = 'active';
      }

      return (
        <li { ...args }>
          <a href="#" onClick={ this.stepHandler.bind(this, index) }>
            <span className="badge">{ stepIndex }</span>
            <span> { step.label }</span>
          </a>
        </li>
      );
    });

    return (
      <ul className="nav nav-pills" role="tablist" style={{ marginLeft : 50 }}>
        { content }
      </ul>
    );
  }
}

export default StepBar;
