import * as db from './database2.js';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var session = require('express-session');
var cookieParser = require('cookie-parser');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array());
app.use(cookieParser());
app.use(session({secret: "Your secret key"}));

app.get('./Login', function(req, res) {
    res.render('Login');
});

app.post('/Login', function(req, res) {
    if (!req.body.username || !req.body.password){
        res.status("400");
        res.send("Invalid Details!");
    }else{
        db.getUserByName(req.body.username);
    }
})