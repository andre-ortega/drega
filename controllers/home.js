/* Unused structure until site expands */

/*
const Campground = require('../models/campground');
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({accessToken: mapBoxToken});
const { cloudinary } = require('../cloudinary');
*/

// File where we are exporting specific functions
module.exports.home = (req, res) => {
    res.render('home');
}
