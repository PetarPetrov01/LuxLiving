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

function isOwner() {
    return (req, res, next) => {
        const userId = req.user?._id;

        if (res.locals.property._ownerId == userId) {
            next();
        } else {
            res.status(401).json({message: 'You are not the owner of this post'});
        }
    };
}


module.exports = { isUser, isGuest, isOwner };