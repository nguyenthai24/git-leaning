module.exports = (req, res, next) => {
    res.locals.getCommonData = {
        content: '',
        slug: '',
        title: '',
        errors: null
    }
    return next();
}