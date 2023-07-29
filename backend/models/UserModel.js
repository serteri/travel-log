const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {type: String, required:true},
    password: {type: String, required:true},
    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    address: {type: String, required:true},
    phonenumber:{type: String, required:true},
    role: {type: mongoose.Types.ObjectId, ref: 'Role'}
});

const User = mongoose.model('User', UserSchema,'users');

module.exports = {User};