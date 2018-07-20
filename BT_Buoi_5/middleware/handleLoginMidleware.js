var data = require('../data');


function valiLogin(req, res, next) {

    let username = req.body.username || "";
    let pass = req.body.pass || "";

    let check = data.filter(function(user){
        if (user.userName == username && user.passWord == pass){
            return user
        }
    });
    
    if (check.length > 0) {
        req.session.user = username;
        res.redirect('/admin');
    }else {
        res.send("Đăng nhập không thành công");
    }
}

module.exports = {
    valiLogin
}