'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function signUp(req, res, next) {
  try {
    (function () {
      var user = req.body;

      _user2.default.insert(user).then(function () {
        delete user.password;
        req.user = user;
        next();
      }).catch(next);
    })();
  } catch (error) {
    next(error);
  }
}

exports.default = signUp;