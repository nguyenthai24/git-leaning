class ErrorHandler extends Error {
    // parent error
    constructor(status = 500, message = 'Internal Server Error') {
        super();
        this.statusCode = status;
        this.message = message;
    }
}

module.exports = { ErrorHandler };
