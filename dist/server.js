'use strict';

/*    FullStack Labs | HTTP Server
 *
 */

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _expressEmitter = require('express-emitter');

var _expressEmitter2 = _interopRequireDefault(_expressEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _expressEmitter2.default(function (app) {
  //----------------------------------------------------------------------------// Express Configuration
  //----------------------------------------------------------------------------

  app

  // Port

  .set('port', process.env.PORT || 3000)

  // Test route

  .get('/', function (req, res) {
    return res.sendFile(_path2.default.resolve(__dirname, '../index.html'));
  });
})

//----------------------------------------------------------------------------
// On server listening
//----------------------------------------------------------------------------

.on('listening', function () {
  console.log('Server is listening', server.app.get('port'));
});