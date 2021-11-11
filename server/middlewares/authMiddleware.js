// Packages
const jwt = require('jsonwebtoken');
// Functions
const User = require('../models/userModel');

// Check if user is authorized
const isAuthorized = async (req, res, next) => {
  try {
    // Retrieve access Token
    const accessToken = req.headers.authorization.split(' ')[1];
    if (!accessToken) throw { message: 'No access token found', statusCode: 400 };

    // Verify the token, check if user with id exists
    const verified = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    // If user do not exist or token has been revoked throw error
    const user = await User.findById(verified._id);
    if (!user) throw { message: 'No user found', statusCode: 400 };
    res.locals.user = user;
    return next();
  } catch (error) {
    return next({ error: { message: error.message, statusCode: error.statusCode || 500 } });
  }
};

module.exports = isAuthorized;