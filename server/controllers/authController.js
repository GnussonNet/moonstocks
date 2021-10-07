// Packages
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Functions
const User = require('../models/userModel');
const { authenticationWithRefreshToken } = require('../helpers/authHelper');
const AsyncManager = require('../utilities/asyncManager');
const ErrorLibrary = require('../utilities/errorLibrary');
const { registerValidation, signinValidation } = require('../utilities/validation');

// JWT options
const jwtExpiry = '2m';
const jwtRefreshExpiry = '40d';

//
// Authentication
//

// Title  Is signed in
// Path   Post /api/v1/user/is_signed_in
// Auth   Public
exports.isSignedIn = AsyncManager(async (req, res, next) => {
  try {
    const { error } = await authenticationWithRefreshToken(req.cookies['refreshToken']);
    if (error) throw { message: error.message, statusCode: error.statusCode };

    return res.status(200).json({ isSignedIn: true });
  } catch (error) {
    return next(new ErrorLibrary(error.message, error.statusCode));
  }
});

// Title  Register user
// Path   Post /api/v1/user/create_account
// Auth   Public
exports.create_account = AsyncManager(async (req, res, next) => {
  try {
    // Validation
    const { error, value } = registerValidation(req.body);
    const validatedEmail = value.email;
    if (error) throw { message: error.details[0].message, statusCode: 400 };

    // Checking if email exists
    const emailExist = await User.findOne({ email: validatedEmail });
    if (emailExist) throw { message: 'Email already exists', statusCode: 400 };

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // Declare user
    const user = new User({
      // Set the first- and last name to user input
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      // Set the email to the validated one, (only lowercase)
      email: validatedEmail,
      // Set the password to the hashed password
      password: hashPassword,
    });

    await User.create(user, function (err, small) {
      if (err) throw { message: 'Something went wrong when creating the account', statusCode: 500 };
      // saved!
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return next(new ErrorLibrary(error.message, error.statusCode));
  }
});

// Title  Sign in
// Path   Post /api/v1/user/sign_in
// Auth   Public
exports.sign_in = AsyncManager(async (req, res, next) => {
  try {
    // Validation
    const { error, value } = signinValidation(req.body);
    const validatedEmail = value.email;
    if (error) throw { message: error.details[0].message, statusCode: 400 };

    // Checking if user exists
    const user = await User.findOne({ email: validatedEmail });
    if (!user) throw { message: 'No user found', statusCode: 400 };

    // Checking if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) throw { message: 'Wrong email or password', statusCode: 400 };

    // Create token
    const accessToken = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: jwtExpiry });
    const refreshToken = jwt.sign({ _id: user._id, tokenVersion: user.tokenVersion }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: jwtRefreshExpiry });
    const usersName = `${user.firstName} ${user.lastName}`;

    res.status(200).cookie('refreshToken', refreshToken, { sameSite: 'strict', path: '/', httpOnly: true, secure: true }).json({ jwt_token: accessToken, name: usersName });
  } catch (error) {
    return next(new ErrorLibrary(error.message, error.statusCode));
  }
});

// Title  Refresh Token
// Path   Post /api/v1/user/refresh_token
// Auth   Public
exports.refresh_token = AsyncManager(async (req, res, next) => {
  try {
    // Authenticate user
    const { error, user } = await authenticationWithRefreshToken(req.cookies['refreshToken']);
    if (error) throw { message: error.message, statusCode: error.statusCode };

    // Generate new access- and refresh token
    const newAccessToken = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: jwtExpiry });
    const newRefreshToken = jwt.sign({ _id: user._id, tokenVersion: user.tokenVersion }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: jwtRefreshExpiry });
    const usersName = `${user.firstName} ${user.lastName}`;

    res.status(200).cookie('refreshToken', newRefreshToken, { sameSite: 'strict', path: '/', httpOnly: true, secure: true }).json({ jwt_token: newAccessToken, name: usersName });
  } catch (error) {
    res.cookie('refreshToken', '', { maxAge: 0 });
    return next(new ErrorLibrary(error.message, error.statusCode));
  }
});

// Title  Sign Out
// Path   Post /api/v1/user/sign_out
// Auth   Public
exports.sign_out = AsyncManager(async (req, res, next) => {
  res.status(200).cookie('refreshToken', '0', { maxAge: 0 }).json({ success: true });
});

//
//
// BELOW IS FOR TESTING PURPOSES ONLY
// Will be removed on production build
//
//

// Title  Get all users
// Path   Get /api/v1/users
// Auth   Public
exports.getUsers = AsyncManager(async (req, res, next) => {
  const users = await User.find();

  return res.status(201).json(users);
});

// Title  Delete user
// Path   DELETE /api/v1/users/:id
// Auth   Public
exports.deleteUser = AsyncManager(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorLibrary(`No user found`, 404));
  }

  await user.remove();

  return res.status(201).json({ message: 'User has been deleted' });
});
