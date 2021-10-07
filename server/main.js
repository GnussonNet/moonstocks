const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();
const database = require('./database');
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const ErrorsMiddleware = require('./middlewares/errorMiddleware');
const AuthMiddleware = require('./middlewares/authMiddleware');
const ErrorLibrary = require('./utilities/errorLibrary');

// Log errors and exit on any uncaught exceptions
process.on('uncaughtException', (error) => {
  console.log('Uncaught Exception... stopping the server!');
  console.log(error.name, error.message);
  process.exit(1);
});

// Declare app to express
const app = express();

// If env PORT is undefined set port
const port = process.env.PORT || 5000;

// Use Cors
app.use(cors());

// Use Cookie Parser
app.use(cookieParser());

// Use json req and res
app.use(express.json());

// Print error if mongoDB could not connect
database.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routers
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', AuthMiddleware, userRouter);

// Error Middleware
app.all('*', (req, res, next) => {
  next(new ErrorLibrary(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(ErrorsMiddleware);

// Declare server
const server = app.listen(port, console.log(`Server running in ${process.env.ENV} on port: ${port}`));

// Log errors and exit on any unhandled rejections
process.on('unhandledRejection', (error) => {
  console.log('Unhandled Rejection... stopping the server!');
  console.log(error.name, error.message);
  server.close(() => {
    process.exit(1);
  });
});
