const express = require('express');
const userController = require('./../controllers/user');
const router = express.Router();

router.route('/register')
                        .get()
                        .post();

router.route('/login')
                        .get()
                        .post();