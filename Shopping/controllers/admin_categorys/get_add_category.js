const { ErrorHandler } = require('../../controllers/error/error');

module.exports = async (req, res, next) => {
    let commonData = res.locals.getCommonData;
    console.log(22)
    commonData = {
        ...commonData,
        contentApp: 'category/add_category.ejs'
    }

    return res.render('admin/index', commonData);
};
