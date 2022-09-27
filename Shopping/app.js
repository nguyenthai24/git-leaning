require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware Session
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
    }),
);

// Middleware Message
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

// Middleware Router
const router = require('./routes');
app.use(router);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });


const { logErrors, clientErrorHandler, errorHandler } = require('./middleware/handlerError');
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

module.exports = app;
