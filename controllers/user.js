const userModel = require('./../models/user');
const bcrypt = require('bcrypt');


exports.getRegisterPage = async (req, res) => {
    res.render('register')
}

exports.register = async (req, res) => {
    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 10)
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
    const { username, password } = req.body;

    const user = await userModel.findOne({ username }).lean();

    if (!user) {
        res.render('login', {
            error: { mesage: 'THIS USER IS NOT EXIST IN DATA BASE' }
        })
    }


    const result = await bcrypt.compare(password, user.password);

    if (!result) {
        res.render('login', {
            error: { mesage: 'USERNAME OR PASSWORD IS WRONG' }
        })
    }

    res.render('mainpage', {
        user: { username: `${user.username}` }
    })

}