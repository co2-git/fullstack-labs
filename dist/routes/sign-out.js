'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function signOut(req, res, next) {
  res.clearCookie('fullStack12345');
  next();
}

exports.default = signOut;