const errorLogger = (err, req, res, next) => {
    console.error('\x1b[31m', err); // adding some color to our logs
    next(err); // calling next middleware
};

const errorResponder = (err, req, res, next) => {
    console.log(2);
    res.header('Content-Type', 'application/json');
    res.status(err.statusCode).send(JSON.stringify(err, null, 4)); // pretty print
};
const invalidPathHandler = (req, res, next) => {
    console.log(233);
    res.redirect('/error');
};

module.exports = { errorLogger, errorResponder, invalidPathHandler };
