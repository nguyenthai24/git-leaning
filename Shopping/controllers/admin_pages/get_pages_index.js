const { ErrorHandler } = require('../../controllers/error/error');
const PageModel = require('../../models/page');

module.exports = async (req, res, next) => {
    let commonData = res.locals.getCommonData;
    const pages = await PageModel.findItemsByQuery({});
    commonData = {
        ...commonData,
        pages: pages,
        contentApp: 'page.ejs'
    }

    return res.render('admin/index', commonData);
};
