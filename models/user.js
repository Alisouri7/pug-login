const mongoose = require('mongoose');

const schema = mongoose.Schema({
    usename: {
        type: String,
        minLength: 3,
        maxLenth: 20,
        required:true
    },
    password: {
        type: String,
        required:true
    }
}, { timestamps: true});

const model = mongoose.model('User', schema);
module.exports = model;