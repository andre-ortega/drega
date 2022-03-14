const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');

//const { isLoggedIn, isAuthor, validateCampground } = require('../middleware.js');
const logins = require('../controllers/login');


router.route('/')
    .get(logins.login);

module.exports = router;
