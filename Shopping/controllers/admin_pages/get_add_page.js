const { ErrorHandler } = require('../../controllers/error/error');

module.exports = async (req, res, next) => {
    const title = '';
    const slug = '';
    const content = '';

    res.render('admin/index', {
        title,
        slug,
        content,
    });
};
