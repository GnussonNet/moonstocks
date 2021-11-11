// Executes the original function and catching any errors
module.exports = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};
