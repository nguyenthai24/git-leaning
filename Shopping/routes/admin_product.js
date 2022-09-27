var express = require('express');
var router = express.Router();
const { ErrorHandler } = require('../controllers/error/error');
const getAddProduct = require('../controllers/admin_products/get_add_product');
const getProduct = require('../controllers/admin_products/get_list_product');
const postProduct = require('../controllers/admin_products/post_add_product')

const upload = require('../utils/upload_file');


// const { title } = require('../utils/validator');
const { check, body, validationResult } = require('express-validator');
const title = check('title', 'Title must have a value').notEmpty();
const content = check('content', 'Content must have a value').notEmpty();

// Get list category
router.get('/', getProduct);

// Get add category
router.get('/add-product', getAddProduct);

// post add page
router.post('/add-product', upload.single('img'), postProduct);

// //Post reorder pages
// router.post('/reorder-page', postReorderPage);

// // Get Edit page
// router.get('/edit-page/:slug', getEditPage);

// // Post edit page
// router.post('/edit-page', postEditPage);

module.exports = router;
