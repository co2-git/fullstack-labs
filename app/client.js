'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

window.socket = io.connect();

// window.socket.on('user', user => {
//   console.info(user);
//   // props.user = user;
//   // render();
// });

function render () {
  ReactDOM.render(<App { ...props } />, document.getElementById('wrapper'));
}

render ();
