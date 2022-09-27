const { ErrorHandler } = require('../../controllers/error/error');
const pageModel = require('../../models/page');

module.exports = async (req, res, next) => {
    let commonData = res.locals.getCommonData;
    const ids = req.body['id[]'];
    let count = 0;

    for(const id of ids) {
        count++;
        
        (async function(count) {    
            const page = await pageModel.findItemByQuery({_id: id});
            if(!page) {
                next(err)
            }
            const replace = {
                sorting: count
            }
            await pageModel.updateItemByQuery(id, replace);

        })(count)
    }

    
    commonData = {
        ...commonData,
        content: 'add_page.ejs'
    }

    return res.render('admin/index', commonData);
};
