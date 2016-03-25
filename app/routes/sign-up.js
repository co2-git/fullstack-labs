'use strict';

import User from '../models/user';

function signUp (req, res, next) {
  try {
    const user = req.body;

    User.insert(user)
      .then(() => {
        delete user.password;
        req.user = user;
        next();
      })
      .catch(next);
  }
  catch ( error ) {
    next(error);
  }
}

export default signUp;
