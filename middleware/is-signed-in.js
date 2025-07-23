const isSignedIn = (req, res, next) => {
    if(req.sessios.user) return next();
    res.redirect('/auth/sign-in');
};

module.exports = isSignedIn;