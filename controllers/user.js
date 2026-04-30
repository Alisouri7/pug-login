const userModel = require('./../models/user');
const bcrypt = require('bcrypt');


exports.getRegisterPage = async (req, res) => {
    res.render('register')
    return
}

exports.register = async (req, res) => {
    const { username, password } = req.body;

    const isUserExist = await userModel.findOne({username}).lean();

    if (!isUserExist) {
        res.render('register',{
            error: {message: 'THIS USER ALREADY EXIST IN DB'}
        })
        return
    }

    const hash = await bcrypt.hash(password, 10)
    const user = await userModel.create({
        username,
        password: hash
    })

    return res.json(user)
}


exports.getLoginPage = async (req, res) => {
    res.render('login')
    return
}

exports.login = async (req, res) => {
    const { username, password } = req.body;
    

    if (!username || !password) {
        res.render('login', {
            error: {message: 'Fill username and password'}
        })
        return
    }

    const user = await userModel.findOne({ username }).lean();

    if (!user) {
        res.render('login', {
            error: { message: 'THIS USER IS NOT EXIST IN DATA BASE' }
        })
        return
    }


    const result = await bcrypt.compare(password, user.password);

    if (!result) {
        res.render('login', {
            error: { message: 'USERNAME OR PASSWORD IS WRONG' }
        })
        return
    }

    res.render('mainpage', {
        user: { username: `${user.username}` }
    })

    return
}