const userModel= require('./../models/user');
const bcrypt = require('bcrypt');


exports.getRegisterPage = async (req, res) => {
    res.render('register')
}

exports.register = async (req, res) => {

}


exports.getLoginPage = async (req, res) => {
    res.render('login')
}

exports.login = async (req, res) => {

}