const { ErrorHandler } = require('../../controllers/error/error');
const { check, body, validationResult } = require('express-validator');
const ProductModel = require('../../models/product');


module.exports = async (req, res, next) => {
    try {
        
        const { title, price, desc, category } = req.body;
        const img = req.file;
        const originURL = req.get('origin');
        console.log(img.filename)
        const newProduct = {
            title,
            price,
            desc,
            category,
            image: `${originURL}/uploads/${img.filename}`
        }
        await ProductModel.createItemByQuery(newProduct)
        console.log(22)
        
        return  res.redirect('/admin/product')

    } catch (error) {
        console.log(error) 
        return next(error)
    }

};
