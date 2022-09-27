const { ErrorHandler } = require('../../controllers/error/error');
const CategoryModel = require('../../models/category');

module.exports = async (req, res, next) => {
    let commonData = res.locals.getCommonData;
    const categorys = await CategoryModel.findItemsByQuery({});
    commonData = {
        ...commonData,
        categorys: categorys,
        contentApp: 'category/list_category.ejs'
    }

    return res.render('admin/index', commonData);
};
