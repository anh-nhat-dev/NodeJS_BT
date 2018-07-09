var express = require('express');
var bordyParser = require('body-parser');
var app = express();
var LoginController = require('./controller/LoginController');
var handleLoginMidlleware = require('./middleware/handleLoginMidleware');


app.use('/public', express.static('./public'));
app.use(bordyParser.urlencoded({extended: true}));

app.post('/login', handleLoginMidlleware.valiLogin);

app.set("views", './views');
app.set("view engine", "ejs");



app.route('/login')
    .get(LoginController.getLogin)
    .post(LoginController.postLogin)
app.listen(3000);