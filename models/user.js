const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required:true
    },
    password: {
        type: String,
        required:true
    }
}, { timestamps: true});

const model = mongoose.model('UsersInPug', schema);
module.exports = model;