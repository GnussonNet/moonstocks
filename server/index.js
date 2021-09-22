const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

app.use(
  cors({
    origin: ['https://stocks.gnusson.net'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

app.use(cookieParser());

// Import Routes
const authRoute = require('./routes/auth');
const stockRoute = require('./routes/stocks');

dotenv.config();

// MongoDB Init
const url = process.env.DB_CONNECTION;
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/stocks', stockRoute);

app.listen(process.env.PORT, () => console.log(`Up and running on port: ${process.env.PORT}`));
