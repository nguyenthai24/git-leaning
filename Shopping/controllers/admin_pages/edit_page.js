const { ErrorHandler } = require('../error/error');
const pageModel = require('../../models/page');

const getEditPage = async (req, res, next) => {
    try {
        let commonData = res.locals.getCommonData;

        const slug = req.params.slug;

        const page = await pageModel.findItemByQuery({ slug: slug });
        commonData = {
            ...commonData,
            contentApp: 'edit_page.ejs',
            title: page.title,
            content: page.content,
            slug: page.slug,
            page: page
        };

        return res.render('admin/index', commonData);
    } catch (error) {
        console.log('error', error);
    }
};

const postEditPage = async (req, res, next) => {
    try {
        let {slug, content, title, id} = req.body;

        const replace = {
            slug: slug.replace(/\s+/g, '-').toLowerCase(),
            content: content.trim(),
            title: title
        }

        const page = await pageModel.updateItemByQuery(id, replace);
        
        return res.redirect('/admin/pages');
    } catch (error) {
        console.log('error', error);
    }
};

module.exports = { getEditPage, postEditPage };
