var express = require('express');
var router = express.Router();

// Get common data
const getCommonData = require('../middleware/get_common_data');
router.use(getCommonData);

// pages
const page = require('./page');
router.use('/', page);

// Admin Page
const adminPages = require('./admin_pages');
router.use('/admin/pages', adminPages);

// Admin category
const adminCategory = require('./admin_categorys');
router.use('/admin/category', adminCategory);

// Product
const adminProduct = require('./admin_product');
router.use('/admin/product', adminProduct)


const user = require('./user');
router.use('/user', user)


// // error
// const errorRouter = require('./error');
// router.use('/error', errorRouter);

module.exports = router;
