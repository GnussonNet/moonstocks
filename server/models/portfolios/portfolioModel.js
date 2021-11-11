const mongoose = require('mongoose');
const Stock = require('./stocks/stockModel');
const Schema = mongoose.Schema;

// MongoDB portfolios schema
const Portfolios = new Schema(
  {
    name: {
      type: String,
      require: true,
      minlength: 2,
      maxlength: 40,
    },
    stocks: [Stock],
  }
);

module.exports = Portfolios;
