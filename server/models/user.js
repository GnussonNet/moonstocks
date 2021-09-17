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
});

module.exports = mongoose.model('User', userSchema);
