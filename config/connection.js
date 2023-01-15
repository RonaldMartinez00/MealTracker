require("dotenv").config();
const mongoose = require('mongoose');
const password = process.env.DB_PASSWORD;

// Connect to MongoDB
async function main(){
await mongoose.connect('mongodb+srv://mealtracker:MT-123@cluster0.6f8zcte.mongodb.net/?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true,
    });
}

module.exports = connection;
