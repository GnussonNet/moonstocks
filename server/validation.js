const Joi = require('joi');

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

module.exports.registerValidation = registerValidation;
module.exports.signinValidation = signinValidation;
