function index(req, res) {

    console.log(req.session.user)
    res.render('admin', {user: req.session.user});

}


module.exports = {
    index
}