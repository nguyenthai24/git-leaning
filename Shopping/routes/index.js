var express = require('express');
var router = express.Router();

// user
const userRouter = require('./users');
router.use('/user-post', userRouter);

// error
const errorRouter = require('./error');
router.use('/error', errorRouter);

module.exports = router;
