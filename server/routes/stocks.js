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

router.get('/test', (req, res) => {
  res.send('Test Works!');
});

router.get('/create', verify, (req, res) => {
  res.send('test');
});

module.exports = router;
