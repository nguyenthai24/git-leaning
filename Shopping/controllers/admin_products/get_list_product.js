const { ErrorHandler } = require('../../controllers/error/error');
const ProductModel = require('../../models/product');

module.exports = async (req, res, next) => {
    let commonData = res.locals.getCommonData;

    const products = await ProductModel.findItemsByQuery({});
    console.log(products)
    commonData = {
        ...commonData,
        products: products,
        contentApp: 'product/list_product.ejs'
    }

    return res.render('admin/index', commonData);
};
