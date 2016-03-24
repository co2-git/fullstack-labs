'use strict';

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
    return res.send('Hello world!');
  });
})

//----------------------------------------------------------------------------
// On server listening
//----------------------------------------------------------------------------

.on('listening', function () {
  console.log('Server is listening', server.app.get('port'));
});