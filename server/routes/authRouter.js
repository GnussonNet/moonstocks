const express = require('express');
const { isSignedIn, create_account, sign_in_with_token, sign_in, refresh_token, sign_out, getUsers, deleteUser  } = require('../controllers/authController');
const router = express.Router();

// Auth routes
router.route('/').get(getUsers);
router.route('/create_account').post(create_account);
router.route('/sign_in').post(sign_in);
router.route('/sign_in_with_token').post(sign_in_with_token);
router.route('/is_signed_in').post(isSignedIn);
router.route('/refresh_token').post(refresh_token);
router.route('/sign_out').post(sign_out);
router.route('/:id').delete(deleteUser);

module.exports = router;
