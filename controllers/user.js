const userModel= require('./../models/user');
const bcrypt = require('bcrypt');


exports.getRegisterPage = async (req, res) => {
    res.render('register')
}

exports.register = async (req, res) => {
    const {username, password} = req.body;

    const hash = await bcrypt.hash(password,10)
    const user = await userModel.create({
        username,
        password: hash
    })

    res.json(user)
}


exports.getLoginPage = async (req, res) => {
    res.render('login')
}

exports.login = async (req, res) => {

}