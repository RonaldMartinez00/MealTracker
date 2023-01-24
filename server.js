require('dotenv').config()
const dotenv = require('dotenv')
const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./controllers/user.js");
const app = express();
const port = process.env.PORT;
const uri = process.env.MONGO_URI;
const mealRoutes = require("./controllers/meals");
const cors = require('cors');
const { METHODS } = require('http');



var corsOptions= {
origin:'http://localhost:3000',
methods:"GET, POST, DELETE, PUT",
changeOrigin:true, 
credentials:true
};
app.use(cors(corsOptions));
app.use(bodyParser.json());


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to MongoDB!");
});


app.use("/", userRoutes);
app.use("/meals",mealRoutes);
app.use("/auth",require('./utils/auth'))
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
