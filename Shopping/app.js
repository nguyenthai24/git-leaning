require('dotenv').config();

// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const router = express.Router();

// const app = express();

// router.use((req, res, next) => {
//     console.log(333)
//     if (!req.headers['x-auth']) return next('router')
//     next()
//   })

//   router.get('/user/:id', (req, res) => {
//     res.send('hello, user!')
//   })

//   // use the router and 401 anything falling through
//   app.use('/admin', router, (req, res) => {
//     res.sendStatus(401)
//   })

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// // predicate the router with a check and bail out when needed

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     console.log(222)
//     next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

const express = require('express');
const fsPromises = require('fs').promises;
const { errorLogger, errorResponder, invalidPathHandler } = require('./middleware/handlerError');

const app = express();

const router = require('./routes');
app.use(router);

// middleware
app.use(errorLogger);
app.use(errorResponder);
app.use(invalidPathHandler);

module.exports = app;
