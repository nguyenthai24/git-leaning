const { ErrorHandler } = require('../../controllers/error/error');

module.exports = async (req, res, next) => {
    let commonData = res.locals.getCommonData;
    
    commonData = {
        ...commonData,
        contentApp: 'add_page.ejs'
    }

    return res.render('admin/index', commonData);
};
