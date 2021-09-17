const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
  res.json({
    stocks: {
      ticker: 'SNES',
      name: 'Snestech Inc.',
    },
  });
});

module.exports = router;
