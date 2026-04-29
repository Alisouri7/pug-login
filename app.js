const express = require('express');
const path = require('path');
const userRouter = require('./routes/user');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/user', userRouter)


module.exports = app;