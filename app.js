const ClrScr = require('./utils/ClrScr');
ClrScr();

const express = require('express');
const router = express.Router();
const session = require('express-session');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');

const loginRoutes = require('./routes/login');

const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('<body style="background-color: #1d2021;"><div><meta charset="UTF-8"><p style="font-size:24px; text-align:center; color:#ebdbb2">[void]</p></div></body>')
})

router.get('/login', (req, res) => {
  res.render('./routes/login');
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not found', 404))
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if(!err.message) err.message = 'Oh no! Something Went Wrong!';
    res.status(statusCode).render('error', { err });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
