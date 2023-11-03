function isUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.status(401).json({ message: 'You must be logged in' });
        }
    };
}

function isGuest() {
    return (req, res, next) => {
        if (req.user) {
            res.status(401).json({ message: 'You are already logged in' });
        } else {
            next();
        }
    };
}


module.exports = { isUser, isGuest };