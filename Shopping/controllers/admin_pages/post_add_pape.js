const { ErrorHandler } = require('../../controllers/error/error');
const { check, body, validationResult } = require('express-validator');

module.exports = async (req, res, next) => {
    console.log(req.body);
    const title = req.body.title;
    const slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
    const content = req.body.content;

    const errors = validationResult(req);
    if (errors) {
        console.log(errors);
        res.render('admin/index', {
            errors,
            title,
            slug,
            content,
        });
    }

    return res.redirect('/admin/pages/add-page');
};
