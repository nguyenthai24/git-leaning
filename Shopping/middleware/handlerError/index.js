function logErrors(err, req, res, next) {
    console.error(err.stack);
    console.log(2)
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    if (!err.statusCode) next(next);

    res.status(500).send(JSON.stringify(err, null, 4));
}
function errorHandler(err, req, res, next) {
    res.status(500).json({ message: 'Internal server error' });
}

module.exports = { logErrors, clientErrorHandler, errorHandler };
