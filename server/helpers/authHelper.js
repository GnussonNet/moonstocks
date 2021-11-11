// Packages
const jwt = require('jsonwebtoken');

// Functions
const User = require('../models/userModel');

// Authenticate user with refresh token
const authenticationWithRefreshToken = async (refreshToken) => {
  try {
    // Check if refresh token is retrieved
    if (!refreshToken) throw { message: 'No refresh token found', statusCode: 400 };

    // Verify the token, check if user with id exists
    const verified = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findOne({ _id: verified._id });

    // If user do not exist or token has been revoked throw error
    if (!user || user.tokenVersion !== verified.tokenVersion) throw { message: 'No user found', statusCode: 400 };
    return { user: user };
  } catch (error) {
    return { error: { message: error.message, statusCode: error.statusCode } };
  }
};

module.exports.authenticationWithRefreshToken = authenticationWithRefreshToken;
