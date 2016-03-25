'use strict';

/*    FullStack Labs | HTTP Server
 *
 */

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _expressEmitter = require('express-emitter');

var _expressEmitter2 = _interopRequireDefault(_expressEmitter);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _webRockets = require('web-rockets');

var _webRockets2 = _interopRequireDefault(_webRockets);

var _webRocketsCookie = require('web-rockets-cookie');

var _webRocketsCookie2 = _interopRequireDefault(_webRocketsCookie);

var _user = require('./models/user');

var _user2 = _interopRequireDefault(_user);

var _signIn = require('./routes/sign-in');

var _signIn2 = _interopRequireDefault(_signIn);

var _signOut = require('./routes/sign-out');

var _signOut2 = _interopRequireDefault(_signOut);

var _signUp = require('./routes/sign-up');

var _signUp2 = _interopRequireDefault(_signUp);

var _setCookie = require('./routes/set-cookie');

var _setCookie2 = _interopRequireDefault(_setCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _expressEmitter2.default(function (app) {

  //----------------------------------------------------------------------------// Express Configuration
  //----------------------------------------------------------------------------

  app

  // Port

  .set('port', process.env.PORT || 3000)

  // Cookie parser

  .use((0, _cookieParser2.default)())

  // Body parsers

  .use(_bodyParser2.default.urlencoded({ extended: true }), _bodyParser2.default.json())

  // User

  .get('/', function (req, res, next) {
    if (req.cookies.fullStack12345) {
      _user2.default.find(req.cookies.fullStack12345).then(function (users) {
        if (!users.length) {
          return next(new Error('Cookie not matching any user'));
        }

        var _users = _slicedToArray(users, 1);

        var user = _users[0];


        req.user = user;

        console.log({ user: user });

        next();
      }).catch(next);
    } else {
      next();
    }
  })

  // Sign in

  .post('/sign-in', _signIn2.default, _setCookie2.default, function (req, res) {
    return res.send(req.user);
  })

  // Sign up

  .post('/sign-up', _signUp2.default, _setCookie2.default, function (req, res) {
    return res.send(req.user);
  })

  // Sign out

  .get('/sign-out', _signOut2.default, function (req, res) {
    return res.send({ out: true });
  })

  // Home page

  .get('/', function (req, res, next) {
    var source = '';

    _fs2.default.createReadStream('index.html').on('error', next).on('data', function (data) {
      source += data.toString();
    }).on('end', function () {
      source = source.replace(/window\.props = \{\};/, 'window.props = ' + JSON.stringify({
        user: req.user
      }, null, 2) + ';');
      res.send(source);
    });
  })

  // Static assets

  .use('/bower_components/', _express2.default.static('bower_components/')).use('/assets/', _express2.default.static('assets/'));
})

//----------------------------------------------------------------------------
// On server listening
//----------------------------------------------------------------------------

.on('listening', function () {
  console.log('Server is listening', server.app.get('port'));

  //--------------------------------------------------------------------------
  // Web Sockets
  //--------------------------------------------------------------------------

  var rockets = new _webRockets2.default(server.server);

  rockets.users = [];

  var findSocketUser = function findSocketUser(user) {
    return rockets.users.reduce(function (match, socketUser) {
      if (socketUser.email === user.email) {
        match = socketUser;
      }
      return match;
    }, null);
  };

  rockets.on('error', server.emit.bind(server, 'error')).on('listening', function () {
    return console.log('Web Sockets up!');
  })

  // Identify socket user by cookie

  .use((0, _webRocketsCookie2.default)('fullStack12345', false, function (cookie, socket, next) {
    if (!cookie) {
      return next();
    }

    _user2.default.find(cookie).then(function (users) {
      var _users2 = _slicedToArray(users, 1);

      var user = _users2[0];

      socket.user = user;

      var socketUser = findSocketUser(user);

      if (!socketUser) {
        rockets.users.push(Object.assign(user, {
          data: {
            household: {
              address: null
            }
          }
        }));
      }

      next();
    }).catch(next);
  })).use(function (socket, next) {
    socket.emit('user', findSocketUser(socket.user));
    next();
  }).listen('changeData', function (socket, domain, section, value) {
    var socketUser = findSocketUser(socket.user);

    socketUser.data[domain][section] = value;
  });
})

//----------------------------------------------------------------------------
// On server error
//----------------------------------------------------------------------------

.on('error', function (error) {
  return console.log(error.stack);
});