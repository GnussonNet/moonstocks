const mongoose = require('mongoose');
const Portfolio = require('./portfolios/portfolioModel');
const Schema = mongoose.Schema;

// MongoDB user schema
const User = new Schema(
  {
    // First name, string, required
    firstName: {
      type: String,
      required: [true, 'First name can not be empty'],
    },

    // Last name, sting, required
    lastName: {
      type: String,
      required: [true, 'Last name can not be empty'],
    },

    // Email, string, required
    email: {
      type: String,
      required: [true, 'Email can not be empty'],
    },

    // Password, string, required, min length 6, max length 40
    password: {
      type: String,
      required: [true, 'Password can not be empty'],
      minlength: [6, 'Password can not be shorter then 6 characters'],
    },

    // Token version, number, default to 1
    tokenVersion: {
      type: Number,
      default: 0,
    },

    // Users portfolios
    portfolios: [Portfolio],
  },

  // Timestamp
  { timestamps: true }
);

module.exports = mongoose.model('users', User);
