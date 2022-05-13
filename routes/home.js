const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');

//const { isLoggedIn, isAuthor, validateCampground } = require('../middleware.js');
const homies = require('../controllers/home');

router.route('/')
    .get(homies.home);

module.exports = router;