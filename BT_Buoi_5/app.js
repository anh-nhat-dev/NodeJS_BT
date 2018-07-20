var express = require('express');
var bordyParser = require('body-parser');
var app = express();
var LoginController = require('./controller/LoginController');
var AdminController = require('./controller/AdminController');
var handleLoginMidlleware = require('./middleware/handleLoginMidleware');
var CheckLogin = require('./middleware/checkLogin');
var CheckLogout = require('./middleware/checkLogout');
var session = require('express-session');

app.use(session({secret: "vietpro"}));

app.use('/public', express.static('./public'));
app.use(bordyParser.urlencoded({extended: true}));

app.set("views", './views');
app.set("view engine", "ejs");

app.use('/login', CheckLogin);
app.use('/admin', CheckLogout);
app.post('/login', handleLoginMidlleware.valiLogin);

app.route('/login')
    .get(LoginController.getLogin)
    .post(LoginController.postLogin)
app.get('/admin', AdminController.index);


app.listen(3000);