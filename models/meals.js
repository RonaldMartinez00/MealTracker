const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const express = require('express');
const { Decimal128 } = require('bson');
const app = express();
const mealsSchema = new Schema({ 
    userid:String,
    mealname:String,
    calories:Decimal128,
    carbs:Decimal128,
    fat:Decimal128,
    protein:Decimal128,
    mealcreatedate:Date
});

const meals = mongoose.model('meals', mealsSchema);



module.exports = meals;
