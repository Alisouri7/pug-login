const express = require('express');
const userController = require('./../controllers/user');
const router = express.Router();

router.route('/register')
                        .get(userController.getRegisterPage)
                        .post(userController.register);

router.route('/login')
                        .get(userController.getLoginPage)
                        .post(userController.login);

module.exports = router;