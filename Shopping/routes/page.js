var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const { ErrorHandler } = require('../controllers/error/error');

// Get pages index
router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Home',
    });
});

module.exports = router;
