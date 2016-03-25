'use strict';

import User from '../models/user';

function signIn (req, res, next) {
  try {
    User.find({
      email     :   req.body.email,
      password  :   req.body.password
    })
      .then(users => {
        if ( ! users.length ) {
          return next(new Error('User not found'));
        }

        const [ user ] = users;

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

export default signIn;
