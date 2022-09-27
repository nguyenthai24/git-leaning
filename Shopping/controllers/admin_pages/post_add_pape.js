const { ErrorHandler } = require('../../controllers/error/error');
const { check, body, validationResult } = require('express-validator');
const pageModel = require('../../models/page');


module.exports = async (req, res, next) => {
    try {
        let commonData = res.locals.getCommonData;
        const title = req.body.title;
        const slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
        const content = req.body.content;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            commonData.errors = errors.errors;
            return res.render('admin', commonData);
        } else {
            const page = await pageModel.findItemByQuery({ slug: slug });
            if (page) {
                req.flash('danger', 'Page slug exsts, choose another');
                res.render('admin', commonData);
            } else {
                const page = {
                    title: title,
                    slug: slug,
                    content: content,
                    sorting: 100
                };

                await pageModel.createItemByQuery(page);

                req.flash('success', 'Page added');
                res.redirect('/admin/pages')
            }
        }
    } catch (error) {
        console.log(error) 
        return next(error)
    }

};
