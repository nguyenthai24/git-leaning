const { check, body } = require('express-validator');

const title = (req, res) => {
    console.log(check('title', 'The password must be 5+ chars long and contain a number').isLength({ min: 5 }));
    return check('title', 'The password must be 5+ chars long and contain a number').isLength({ min: 5 });
};

module.exports = {
    title,
};
