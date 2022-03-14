




// Logged in (session, flash)
/*
module.exports.isLoggedIn = (req, res, next) => {
    console.log("REQ.USER...", req.user);
    if(!req.isAuthenticated()) {
        // This information is saved by default
		//console.log(req.path, req.originalUrl);

        // we are given originalUrl and are able to save it in our session
		req.session.returnTo = req.originalUrl;
        req.flash('error', 'you must be signed in');
        return res.redirect('/login');
    }
    next();
}

*/
