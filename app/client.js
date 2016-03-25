'use strict';

import React          from 'react';
import ReactDOM       from 'react-dom';
import App            from './components/app';

// Connect client to Web Sockets Server

window.socket = io.connect();

// Render React Component

ReactDOM.render(<App { ...props } />, document.getElementById('wrapper'));
