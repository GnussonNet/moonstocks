const router = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation, signinValidation } = require('../validation');

const jwtExpiry = '2m';
const jwtRefreshExpiry = '120d';

router.post('/create_account', async (req, res) => {
  // Validation
  const { error, value } = registerValidation(req.body);
  const validatedEmail = value.email;
  if (error) return res.status(200).send(error.details[0].message);

  // Checking if email exists
  const emailExist = await User.findOne({ email: validatedEmail });
  if (emailExist) return res.status(200).send('Email already exists');

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Declare user
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: validatedEmail,
    password: hashPassword,
  });

  // Save user
  try {
    user.save();
    res.send('Account created!');
  } catch (err) {
    res.status(200).send(err);
  }
});

router.post('/signin', async (req, res) => {
  // Validation
  const { error, value } = signinValidation(req.body);
  const validatedEmail = value.email;
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if user exists
  const user = await User.findOne({ email: validatedEmail });
  if (!user) return res.status(400).send('The email or password is incorrect');

  // Checking if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('The email or password is incorrect');

  // Create token
  const accessToken = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: jwtExpiry });
  const refreshToken = jwt.sign({ _id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: jwtRefreshExpiry });
  const usersName = `${user.firstName} ${user.lastName}`;

  res.status(202).cookie('refreshToken', refreshToken, { sameSite: 'strict', path: '/', httpOnly: true, secure: true }).json({ jwt_token: accessToken, name: usersName, message: 'Signed in!' });
});


router.post('/refresh_token', async (req, res) => {
  const refreshToken = req.cookies['refreshToken'];
  if (!refreshToken) return res.status(401).send('Access Denied');

  // Very the token, check if user with id exists. Then create new access- and refresh token
  try {
    const verified = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findOne({ _id: verified._id });

    const newAccessToken = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: jwtExpiry });
    const newRefreshToken = jwt.sign({ _id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: jwtRefreshExpiry });
    const usersName = `${user.firstName} ${user.lastName}`;

    res.status(202).cookie('refreshToken', newRefreshToken, { sameSite: 'strict', path: '/', httpOnly: true, secure: true }).json({ jwt_token: newAccessToken, name: usersName, message: 'Signed in!' });
  } catch {
    res.status(400).send('Invalid Refresh Token');
  }
});

router.post('/is_signed_in', async (req, res) => {
  const refreshToken = req.cookies['refreshToken'];
  if (refreshToken) {
    res.status(202).json({ isSignedIn: true });
  } else {
    res.status(202).cookie('refreshToken', '', { maxAge: 0 }).json({ message: 'Something went wrong!', isSignedIn: false });
  }
});

router.post('/logout', async (req, res) => {
  try {
    res.status(202).cookie('refreshToken', '', { maxAge: 0 }).json({ message: 'Logged out!' });
  } catch {
    res.status(400).send('Error while logging out');
  }
});

module.exports = router;
