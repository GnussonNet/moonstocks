const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('authorization').split(' ')[1];
  if (!token) return res.status(200).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = verified;
    next();
  } catch {
    res.status(200).send('Invalid Token');
  }
};
