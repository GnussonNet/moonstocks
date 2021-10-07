const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MongoDB lot schema
const Lot = new Schema(
  {
    per_share_cost: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    date: {
      type: Date,
    },
  },
);

module.exports = Lot;
