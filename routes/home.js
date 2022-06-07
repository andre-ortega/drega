/* Currently a single-page site until expansion */

const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');

const homies = require('../controllers/home');

router.route('/')
    .get(homies.home);

router.get('/success', homies.success);

module.exports = router;
