var express = require('express');
var router = express.Router();
const { ErrorHandler } = require('../controllers/error/error');
const getAddPage = require('../controllers/admin_pages/get_add_page');
const postAddPage = require('../controllers/admin_pages/post_add_pape');
// const { title } = require('../utils/validator');
const { check, body, validationResult } = require('express-validator');

const title = check('title', 'Title must have a value').notEmpty();
const content = check('content', 'Content must have a value').notEmpty();

router.get('/', (req, res, next) => {
    res.send('1243');
});

// Get add page
router.get('/add-page', getAddPage);

// post add page
router.post('/add-page', [title, content], postAddPage);

module.exports = router;
