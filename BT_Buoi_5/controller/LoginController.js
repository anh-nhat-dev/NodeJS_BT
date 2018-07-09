function getLogin(req, res) {

    res.render('login');

}

function postLogin(req, res) {
    res.send("Đăng nhập thành công");
}

module.exports = {
    getLogin,
    postLogin
}