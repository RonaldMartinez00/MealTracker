const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const express = require('express');
const app = express();
const userSchema = new Schema({
    userfirstname:String, 
    userlastname:String, 
    useremail:String, 
    userpassword:String,
    createdate:String
});

const User = mongoose.model('user', userSchema);



module.exports = User;

  