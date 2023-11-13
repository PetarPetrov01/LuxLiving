function errorParser(error) {
    if (Array.isArray(error)) {
        //Error from express-validator
        return error.map(err => err.msg).join('\n');
    } else if (error.name == 'ValidationError') {
        //Error coming from monggose validation
        return Object.values(error.errors).map(e => e.message).join('\n');
    } else {
        //Custom thrown error
        return error.message;
    }
};

module.exports = { errorParser };