'use strict';

function setCookieUser (req, res, next) {
  res.cookie('fullStack12345',
    req.user,
    {
      "path"      :   "/",
      "signed"    :   false,
      "maxAge"    :   1000 * 60 * 60 * 24 * 15,
      "httpOnly"  :   true
    }
  );

  next();
}

export default setCookieUser;
