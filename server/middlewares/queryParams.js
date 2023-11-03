module.exports = () => (req, res, next) => {

    if (req.query) {
        req.queryParams = {};

        if (req.query.search) {
            req.queryParams.search = req.query.search;
        };

        if (req.query.sort) {
            const [sortKey, order] = req.query.sort.split(' ');
            req.queryParams.sort = {
                [sortKey]: order == 'asc' ? 1 : 0
            };
        };

        if(req.query.pageSize) {
            req.queryParams.limit = req.query.pageSize;
        }
    }

    next();
};