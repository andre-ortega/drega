/* Unused structure until site expands */

// File where we are exporting specific functions
module.exports.home = (req, res) => {
    res.render('home');
}

// File where we are exporting specific functions
module.exports.success = (req, res) => {
    req.flash('success', 'Successfully Sent Email');
    res.redirect('/home');
}
