'use strict';

import Server from 'express-emitter';

const server = new Server(app => {
  //----------------------------------------------------------------------------// Express Configuration
  //----------------------------------------------------------------------------

  app

    // Port

    .set('port', process.env.PORT || 3000)

    // Test route

    .get('/', (req, res) => res.send('Hello world!'));
})

  //----------------------------------------------------------------------------
  // On server listening
  //----------------------------------------------------------------------------

  .on('listening', () => {
    console.log('Server is listening', server.app.get('port'));
  })
