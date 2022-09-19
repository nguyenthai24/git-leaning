var express = require('express');
var router = express.Router();

// pages
const page = require('./page');
router.use('/', page);

// Admin Page
const adminPages = require('./admin_pages');
router.use('/admin/pages', adminPages);

// error
const errorRouter = require('./error');
router.use('/error', errorRouter);

module.exports = router;
