'use strict';

function signOut (req, res, next) {
  res.clearCookie('fullStack12345');
  next();
}

export default signOut;
