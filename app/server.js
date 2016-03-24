'use strict';

/*    FullStack Labs | HTTP Server
 *
 */

import path from 'path';
import Server from 'express-emitter';

const server = new Server(app => {
  //----------------------------------------------------------------------------// Express Configuration
  //----------------------------------------------------------------------------

  app

    // Port

    .set('port', process.env.PORT || 3000)

    // Test route

    .get('/', (req, res) =>
      res.sendFile(path.resolve(__dirname, '../index.html'))
    );
})

  //----------------------------------------------------------------------------
  // On server listening
  //----------------------------------------------------------------------------

  .on('listening', () => {
    console.log('Server is listening', server.app.get('port'));
  })
