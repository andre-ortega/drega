/* Unused structure until site expands */

// File where we are exporting specific functions
module.exports.home = (req, res) => {

    console.log("\n In home - req.flash:")
    console.log(req.flash);
    console.log("\n In home - req.success:")
    console.log(req.success);
    res.render('home', { message: req.flash('success') });
}

// File where we are exporting specific functions
module.exports.success = (req, res) => {

    console.log("\nIn success 1: req.flash:")

    req.flash('success', 'Successfully Sent Email');

    console.log("\nIn success 2: req.flash:")
    console.log(req.flash)

    res.redirect('/');
}
