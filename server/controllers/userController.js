// Functions imports
const User = require('../models/userModel');
const AsyncManager = require('../utilities/asyncManager');
const ErrorLibrary = require('../utilities/errorLibrary');
const { portfolioValidation, stocksValidation, updateStocksValidation, lotValidation } = require('../utilities/validation');

//
// Portfolios
//

// Title  Get Portfolios
// Path   Get /api/v1/user/portfolios
// Auth   Private
exports.get_portfolios = AsyncManager(async (req, res, next) => {
  try {
    // Retrieve user from auth middleware
    const user = res.locals.user;

    // Get users portfolios
    const portfolios = await user.portfolios;
    if (!portfolios.length) throw { message: 'No portfolios exists', statusCode: 400 };

    return res.status(200).json(portfolios);
  } catch (error) {
    return next(new ErrorLibrary(error.message, error.statusCode));
  }
});

// Title  Get Portfolio
// Path   Get /api/v1/user/portfolios/:id
// Auth   Private
exports.get_portfolio = AsyncManager(async (req, res, next) => {
  try {
    // Retrieve user from auth middleware
    const user = res.locals.user;
    
    // Get users portfolios
    const portfolios = await user.portfolios;
    if (!portfolios.length) throw { message: 'No portfolios exists', statusCode: 400 };

    // Get the requested portfolio
    let portfolio = portfolios.find(obj => obj._id == req.params.id);
    if (!portfolio) throw { message: 'No portfolio exists', statusCode: 400 };
    
    return res.status(200).json(portfolio);
  } catch (error) {
    return next(new ErrorLibrary(error.message, error.statusCode));
  }
});

// Title  Add Portfolios
// Path   Post /api/v1/user/portfolios
// Auth   Private
exports.add_portfolio = AsyncManager(async (req, res, next) => {
  try {
    // Retrieve user from auth middleware
    const user = res.locals.user;

    // Validation
    const { error, value } = portfolioValidation(req.body);
    if (error) throw { message: error.details[0].message, statusCode: 400 };

    // Get users portfolios
    const portfolios = await user.portfolios;

    // Declare new portfolio and push to portfolios
    const portfolio = {
      name: value.name,
    };
    portfolios.push(portfolio);

    // Save user
    user.save();
    return res.status(200).json({ added_portfolio: portfolio });
  } catch (error) {
    return next(new ErrorLibrary(error.message, error.statusCode));
  }
});

// Title  Update Portfolio
// Path   Patch /api/v1/user/portfolios:id
// Auth   Private
exports.update_portfolio = AsyncManager(async (req, res, next) => {
  try {
    // Retrieve user from auth middleware
    const user = res.locals.user;

    // Validation
    const { error, value } = portfolioValidation(req.body);
    if (error) throw { message: error.details[0].message, statusCode: 400 };

    // Get users portfolios
    const portfolios = await user.portfolios;
    if (!portfolios.length) throw { message: 'No portfolios exists', statusCode: 400 };

    // Find the requested portfolio
    const portfolio = portfolios.find((item) => item._id.toString() === req.params.id);
    if (!portfolio) throw { message: 'Could not find portfolio', statusCode: 400 };

    // Update the requested portfolio
    portfolio.name = req.body.name;

    // Save user
    user.save();
    res.status(200).json({ updated_portfolio: req.params.id });
  } catch (error) {
    return next(new ErrorLibrary(error.message, error.statusCode));
  }
});

// Title  Delete Portfolio
// Path   Delete /api/v1/user/portfolio:id
// Auth   Private
exports.delete_portfolio = AsyncManager(async (req, res, next) => {
  try {
    // Retrieve user from auth middleware
    const user = res.locals.user;

    // Get users portfolios
    const portfolios = await user.portfolios;
    if (!portfolios.length) throw { message: 'No portfolios exists', statusCode: 400 };

    // Find index of requested portfolio and delete it
    const index = portfolios.findIndex((item) => item._id.toString() === req.params.id);
    if (index && index === -1) throw { message: 'Could not found portfolio', statusCode: 400 };
    portfolios.splice(index, 1);

    // Save user
    user.save();
    res.status(200).json({ deleted_portfolio: req.params.id });
  } catch (error) {
    return next(new ErrorLibrary(error.message, error.statusCode));
  }
});

//
// Stocks
//

// Title  Add Stock
// Path   Post /api/v1/user/portfolios/stocks/add
// Auth   Private
exports.add_stock = AsyncManager(async (req, res, next) => {
  try {
    // Retrieve user from auth middleware
    const user = res.locals.user;

    // Validation
    const { error, value } = stocksValidation(req.body);
    if (error) throw { message: error.details[0].message, statusCode: 400 };

    // Get users portfolios
    const portfolios = await user.portfolios;
    if (!portfolios.length) {
      // If not portfolios exists, add the requested portfolio and stock
      User.findByIdAndUpdate(user._id, { $addToSet: { portfolios: req.body } }, function (error) {
        if (error) throw { message: 'Something went wrong when adding the requested stock ', statusCode: 400 };
      });
      return res.status(200).json({ first_portfolio: req.body });
    }

    // Get users stocks inside requested portfolio
    const portfolio = portfolios.find((element) => element.name == req.body.name);
    if (!portfolio) {
      // If no stocks exists add the requested stock
      User.findByIdAndUpdate(user._id, { $addToSet: { portfolios: req.body } }, function (error) {
        if (error) console.log(error);
      });
      return res.status(200).json({ new_portfolio: req.body });
    }

    // Get requested stock inside specific portfolio
    const stock = portfolio.stocks.find((element) => element.ticker == req.body.stocks[0].ticker);
    if (!stock) {
      // If requested stock does not exist, declare new stock
      const newStock = {
        ticker: req.body.stocks[0].ticker,
        currency: req.body.stocks[0].currency,
        lots: [
          {
            per_share_cost: req.body.stocks[0].lots[0].per_share_cost,
            quantity: req.body.stocks[0].lots[0].quantity,
            date: req.body.stocks[0].lots[0].date,
          },
        ],
      };

      // Push new stock to stocks and save user
      portfolio.stocks.push(newStock);

      // Save user
      await user.save();
      return res.status(200).json({ added_stock: newStock });
    } else {
      // Declare new lot
      const newLot = {
        per_share_cost: req.body.stocks[0].lots[0].per_share_cost,
        quantity: req.body.stocks[0].lots[0].quantity,
        date: req.body.stocks[0].lots[0].date,
      };

      // Push new lot to stock and save user
      stock.lots.push(newLot);

      // Save user
      await user.save();
      return res.status(200).json({ added_lot: newLot });
    }
  } catch (error) {
    return next(new ErrorLibrary(error.message, error.statusCode));
  }
});

// Title  Update Stock
// Path   Patch /api/v1/user/portfolios/stocks:id
// Auth   Private
exports.update_stock = AsyncManager(async (req, res, next) => {
  try {
    // Retrieve user from auth middleware
    const user = res.locals.user;

    // Validation
    const { error, value } = updateStocksValidation(req.body);
    if (error) throw { message: error.details[0].message, statusCode: 400 };

    // Get users portfolios
    const portfolios = await user.portfolios;
    if (!portfolios.length) throw { message: 'No portfolios exists', statusCode: 400 };

    // Go thru all portfolios
    for (var i = 0; i < portfolios.length; i++) {
      // Find requested stock to update
      const stock = portfolios[i].stocks.find((element) => element._id.toString() == req.params.id);
      // If stock is found, update it to requested values
      if (stock) {
        stock.ticker = value.ticker;
        stock.currency = value.currency;
      }
    }

    // Save user
    await user.save();
    return res.status(200).json({ updated_stock: req.params.id });
  } catch (error) {
    return next(new ErrorLibrary(error.message, error.statusCode));
  }
});

// Title  Delete Stock
// Path   Delete /api/v1/user/portfolios/stocks:id
// Auth   Private
exports.delete_stock = AsyncManager(async (req, res, next) => {
  try {
    // Retrieve user from auth middleware
    const user = res.locals.user;

    // Get users portfolios
    const portfolios = await user.portfolios;
    if (!portfolios.length) throw { message: 'No portfolios exists', statusCode: 400 };

    // Go thru all portfolios
    for (var i = 0; i < portfolios.length; i++)
      // If stocks inside portfolio have more then 1 stock
      if (portfolios[i].stocks.length > 1) {
        // Find the index of requested stock
        const index = portfolios[i].stocks.findIndex((element) => element._id.toString() == req.params.id);
        // If the index exists, delete the stock
        if (index) {
          // Delete the entire portfolio
          portfolios[i].stocks.splice(index, 1);
          break;
        }
      }
      // If stocks inside portfolio have less then 1 stock, empty the stocks array
      else {
        portfolios[i].stocks = [];
        break;
      }

    // Save user
    await user.save();
    return res.status(200).json({ deleted_stock: req.params.id });
  } catch (error) {
    return next(new ErrorLibrary(error.message, error.statusCode));
  }
});

// Title  Update Lot
// Path   Patch /api/v1/user/portfolios/stocks/lots
// Auth   Public
exports.update_lot = AsyncManager(async (req, res, next) => {
  try {
    // Retrieve user from auth middleware
    const user = res.locals.user;

    // Validation
    const { error, value } = lotValidation(req.body);
    if (error) throw { message: error.details[0].message, statusCode: 400 };

    // Get users portfolios
    const portfolios = await user.portfolios;
    if (!portfolios.length) throw { message: 'No portfolios exists', statusCode: 400 };

    // Go thru all portfolios
    for (var i = 0; i < portfolios.length; i++) {
      // Go thru all stocks
      for (var j = 0; j < portfolios[i].stocks.length; j++) {
        // Find the requested lot
        const lot = portfolios[i].stocks[0].lots.find((element) => element._id.toString() == req.params.id);
        // If lot is found, update it to requested values
        if (lot) {
          lot.per_share_cost = value.per_share_cost;
          lot.quantity = value.quantity;
          lot.date = value.date;
          break;
        }
      }
    }

    // Save user
    await user.save();
    return res.status(200).json({ updated_lot: req.params.id });
  } catch (error) {
    return next(new ErrorLibrary(error.message, error.statusCode));
  }
});

// Title  Delete Lot
// Path   Delete /api/v1/user/portfolios/stocks/lots:id
// Auth   Private
exports.delete_lot = AsyncManager(async (req, res, next) => {
  try {
    // Retrieve user from auth middleware
    const user = res.locals.user;

    // Get users portfolios
    const portfolios = await user.portfolios;
    if (!portfolios.length) throw { message: 'No portfolios exists', statusCode: 400 };

    // Go thru all portfolios
    for (var i = 0; i < portfolios.length; i++)
      // Go thru all stocks
      for (var j = 0; j < portfolios[i].stocks.length; j++)
        // If the requested lot's stock have more then 1 lot. Delete the requested lot
        if (portfolios[i].stocks[j].lots.length > 1) {
          const index = portfolios[i].stocks[j].lots.findIndex((element) => element._id.toString() == req.params.id);
          portfolios[i].stocks[j].lots.splice(index, 1);
          break;
          // If the requested lot's stock have less then 1 lot and the lot's portfolio have more then 1 stock, delete lot's stock
        } else if (portfolios[i].stocks.length > 1) {
          const index = portfolios[i].stocks.findIndex((element) => element._id.toString() == portfolios[i].stocks[j]._id);
          portfolios[i].stocks.splice(index, 1);
          break;
          // If the requested lot's stock have less then 1 lot and the lot's portfolio have less then 1 stock, clear the lot's stocks array
        } else {
          portfolios[i].stocks = [];
          break;
        }

    await user.save();

    return res.status(200).json({ deleted_lot: req.params.id });
  } catch (error) {
    return next(new ErrorLibrary(error.message, error.statusCode));
  }
});
