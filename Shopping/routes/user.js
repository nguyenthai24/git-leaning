var express = require('express');
var router = express.Router();
const { ErrorHandler } = require('../controllers/error/error');
const { postRegisterUser } = require('../controllers/user_controller/user.controller');
const { regisUser} = require('../controllers/user_controller/user.controller');

console.log(regisUser)

// Get list category
router.get('/', (req, res, next) => {
    res.json('123')
});

router.post('/register', regisUser);

module.exports = router;
