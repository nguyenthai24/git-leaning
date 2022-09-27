var express = require('express');
var router = express.Router();
const { ErrorHandler } = require('../controllers/error/error');
const getAddCategory = require('../controllers/admin_categorys/get_add_category');
const postAddPage = require('../controllers/admin_pages/post_add_pape');
const getCategory = require('../controllers/admin_categorys/get_admin_category');
const postReorderPage = require('../controllers/admin_pages/post_reorder_page');
const {getEditPage, postEditPage} = require('../controllers/admin_pages/edit_page');



// const { title } = require('../utils/validator');
const { check, body, validationResult } = require('express-validator');
const title = check('title', 'Title must have a value').notEmpty();
const content = check('content', 'Content must have a value').notEmpty();

// Get list category
router.get('/', getCategory);

// Get add category
router.get('/add-category', getAddCategory);

// // post add page
// router.post('/add-page', [title, content], postAddPage);

// //Post reorder pages
// router.post('/reorder-page', postReorderPage);

// // Get Edit page
// router.get('/edit-page/:slug', getEditPage);

// // Post edit page
// router.post('/edit-page', postEditPage);

module.exports = router;
