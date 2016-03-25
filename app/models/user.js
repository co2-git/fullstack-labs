'use strict';

import DB from '../lib/db';

class User extends DB {
  static validate (user, users) {
    const validations = [];

    validations.push(
      users.every(storedUser => storedUser.email !== user.email)
    );

    return validations.every(valid => valid);
  }
}

export default User;
