var express = require('express');
var router = express.Router();
const { ErrorHandler } = require('../controllers/error/error');
const getAddPage = require('../controllers/admin_pages/get_add_page');
const postAddPage = require('../controllers/admin_pages/post_add_pape');
const getPapes = require('../controllers/admin_pages/get_pages_index');
const postReorderPage = require('../controllers/admin_pages/post_reorder_page');
const {getEditPage, postEditPage} = require('../controllers/admin_pages/edit_page');



// const { title } = require('../utils/validator');
const { check, body, validationResult } = require('express-validator');
const title = check('title', 'Title must have a value').notEmpty();
const content = check('content', 'Content must have a value').notEmpty();

router.get('/', getPapes);

// Get add page
router.get('/add-page', getAddPage);

// post add page
router.post('/add-page', [title, content], postAddPage);

//Post reorder pages
router.post('/reorder-page', postReorderPage);

// Get Edit page
router.get('/edit-page/:slug', getEditPage);

// Post edit page
router.post('/edit-page', postEditPage);

module.exports = router;
