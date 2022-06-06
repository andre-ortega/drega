/* Unused structure until site expands */

// File where we are exporting specific functions
module.exports.home = (req, res) => {
    console.log("\n req.flash:")
    console.log(req.flash);
    res.render('home', { messages: req.flash('success') });
}

// File where we are exporting specific functions
module.exports.success = (req, res) => {
    req.flash('success', 'Successfully Sent Email');
    console.log("\n req:")
    console.log(req)
    res.redirect('/');
}
