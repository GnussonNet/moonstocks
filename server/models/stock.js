const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
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
            require: true,
          },
          quantity: 
          {
            type: Number,
            require: true,
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

module.exports = mongoose.model('Stock', stockSchema);
