var express = require('express');
var db = require('quick.db');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let { Client } = require('discord.js')
let client = new Client();


var app = express();

app.set('views', path.join(__dirname, 'src'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
  let rofli = await client.users.fetch("715576724674314360")
  res.render('index', { 
    title: 'Home' ,
    bot: client,
    roffly: rofli
  });
});

app.get('/about', async(req, res) => {
  let rofli = await client.users.fetch("715576724674314360")
  res.render('about.ejs', { 
    title: 'Home' ,
    bot: client,
    roffly: rofli
  });
});



client.login("NzY0ODczMDUxMjI0NDA40.X4Mlig.0F2VNjIfs2VawrG9v7XYCmV2US0");
app.listen(3000)
