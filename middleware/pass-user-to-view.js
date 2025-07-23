const passUserToView = (req, res, next) => {
    res.locals.user = req.session.user ? res.session.user : null;
    next();
};

module.exports = passUserToView;