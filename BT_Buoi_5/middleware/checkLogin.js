module.exports = function(req, res, next) {

    if (typeof req.session.user != "undefined") {
        res.redirect('/admin');
    } else {
        next();
    }

}