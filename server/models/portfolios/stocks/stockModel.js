const { string } = require('joi');
const mongoose = require('mongoose');
const Lot = require('./lotModel');
const Schema = mongoose.Schema;

// MongoDB stock schema
const Stock = new Schema(
  {
    ticker: {
      type: String,
      minlength: 2,
      maxlength: 20,
    },
    currency: {
      type: String,
      minlength: 3,
      maxlength: 3,
    },
    lots: [Lot],
  }
);

module.exports = Stock;