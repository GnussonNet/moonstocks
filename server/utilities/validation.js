const Joi = require('joi');

//
// Auth
//

// Register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(1).max(40),
    lastName: Joi.string().required().min(1).max(40),
    email: Joi.string().required().email().max(345).lowercase(),
    password: Joi.string().required().min(8),
  });
  return schema.validate(data);
};

// Signin validation
const signinValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email().max(345).lowercase(),
    password: Joi.string().required().min(8),
  });
  return schema.validate(data);
};

//
// Portfolio
//

// Portfolio validation
const portfolioValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(2).max(20).regex(RegExp('^(?![0-9])[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$')),
  });
  return schema.validate(data);
};

//
// Stocks
//

// Add stock validation
const stocksValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(2).max(20).regex(RegExp('^(?![0-9])[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$')),
    stocks: Joi.array().items({
      ticker: Joi.string().required().min(2).max(15).regex(RegExp('^(?<PreXChangeCode>[A-Z]{1,5}:(?![A-Zd]+.))?(?<Stock>[A-Z-]{2,5}|d{1,3}(?=.)|d{6,})(?<Type>[A-Z-]{2,5}|d{1,3}(?=.)|d{6,})?(?<PostXChangeCode>.[A-Z]{2})?$')),
      currency: Joi.string().required().uppercase().min(3).max(3).regex(RegExp('^[a-zA-Z]{3}$')),
      lots: Joi.array().items({
        per_share_cost: Joi.number().required().greater(0).less(10000000),
        quantity: Joi.number().required().greater(0).less(10000000),
        date: Joi.date().required().less('now'),
      }),
    }),
  });
  return schema.validate(data);
};

// Update stock validation
const updateStocksValidation = (data) => {
  const schema = Joi.object({
    ticker: Joi.string().required().min(2).max(15).regex(RegExp('^(?<PreXChangeCode>[A-Z]{1,5}:(?![A-Zd]+.))?(?<Stock>[A-Z-]{2,5}|d{1,3}(?=.)|d{6,})(?<Type>[A-Z-]{2,5}|d{1,3}(?=.)|d{6,})?(?<PostXChangeCode>.[A-Z]{2})?$')),
    currency: Joi.string().required().uppercase().min(3).max(3).regex(RegExp('^[a-zA-Z]{3}$')),
  });
  return schema.validate(data);
};

//
// Lots
//

// Update lot
const lotValidation = (data) => {
  const schema = Joi.object({
    per_share_cost: Joi.number().required().greater(0).less(10000000),
    quantity: Joi.number().required().greater(0).less(10000000),
    date: Joi.date().required().less('now'),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.signinValidation = signinValidation;
module.exports.portfolioValidation = portfolioValidation;
module.exports.stocksValidation = stocksValidation;
module.exports.updateStocksValidation = updateStocksValidation;
module.exports.lotValidation = lotValidation;
