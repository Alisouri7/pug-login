const mongoose = require('mongoose');

const schema = mongoose.Schema({
    usename: {
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