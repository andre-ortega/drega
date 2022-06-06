console.clear();

const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const router = express.Router();
const session = require('express-session');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');
const flash = require('connect-flash');

const homeRoutes = require('./routes/home');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.io')));

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

const sessionConfig = {

    secret: 'topsecretbippityboppity',

    name: 'session',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 + 60 * 60 * 24 * 7
    },
}

app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use('/', homeRoutes);

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not found', 404))
});

app.use((err, req, res, next) => {
    console.log(err);
    const { statusCode = 500 } = err;
    if(!err.message) err.message = 'Oh no! Something Went Wrong!';
    res.status(statusCode).render('error', { err });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
