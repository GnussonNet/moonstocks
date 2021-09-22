const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    require: true,
    min: 1,
    max: 40,
  },
  lastName: {
    type: String,
    require: true,
    min: 1,
    max: 40,
  },
  email: {
    type: String,
    require: true,
    min: 5,
    max: 255,
  },
  password: {
    type: String,
    require: true,
    min: 8,
    max: 50,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  stock: [
    {
      ticker: {
        type: String,
        require: true,
        min: 2,
        max: 20,
      },
      lots: [
        {
          id: {
            type: String,
          },
          per_share_cost: 
          {
            type: Number,
          },
          quantity: 
          {
            type: Number,
          },
          date: 
          {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
