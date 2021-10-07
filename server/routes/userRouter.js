const express = require('express');
const { get_portfolios, add_portfolio, update_portfolio, delete_portfolio, add_stock, update_stock, delete_stock, update_lot, delete_lot, add_portfolios } = require('../controllers/userController');
const router = express.Router();

// Portfolio routes
router.route('/portfolios').get(get_portfolios).post(add_portfolio);
router.route('/portfolios/:id').patch(update_portfolio).delete(delete_portfolio);

// User routes
router.route('/portfolios/stocks').post(add_stock);
router.route('/portfolios/stocks/:id').patch(update_stock).delete(delete_stock);
router.route('/portfolios/stocks/lots/:id').patch(update_lot).delete(delete_lot);

module.exports = router;
