const mongoose = require('mongoose');

const connectionString = process.env.MONGO_URL;

mongoose.connect(connectionString, { useNewUrlParser: true }).then((res) => {
  console.log('Connected to MongoDB');
}).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;