const { ErrorHandler } = require('../../controllers/error/error');
const CategoryModel = require('../../models/category');
const ProductModel = require('../../models/product');

module.exports = async (req, res, next) => {
    let commonData = res.locals.getCommonData;

    const categorys = await CategoryModel.findItemsByQuery({});

    commonData = {
        ...commonData,
        categorys: categorys,
        contentApp: 'product/add_product.ejs'
    }

    return res.render('admin/index', commonData);
};
