'use strict';

/*    FullStack Labs | HTTP Server
 *
 */

import path from 'path';
import Server from 'express-emitter';
import express from 'express';

const server = new Server(app => {
  //----------------------------------------------------------------------------// Express Configuration
  //----------------------------------------------------------------------------

  app

    // Port

    .set('port', process.env.PORT || 3000)

    // Test route

    .get('/', (req, res) =>
      res.sendFile(path.resolve(__dirname, '../index.html'))
    )

    // Static assets

    .use('/bower_components/', express.static('bower_components/'))

    .use('/assets/', express.static('assets/'));
})

  //----------------------------------------------------------------------------
  // On server listening
  //----------------------------------------------------------------------------

  .on('listening', () => {
    console.log('Server is listening', server.app.get('port'));
  })
