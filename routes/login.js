const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');

//const { isLoggedIn, isAuthor, validateCampground } = require('../middleware.js');

router.route('/')
    .get(catchAsync());

module.exports = router;
