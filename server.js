require('dotenv').config()
const dotenv = require('dotenv')
const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./controllers/user.js");
const app = express();
const port = process.env.PORT;
const uri = process.env.MONGO_URI;


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to MongoDB!");
});


app.use("/", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/users', async (req, res) => {
  try {
      const users = await users.find({});
      res.status(200).send(users);
  } catch (error) {
      res.status(500).send(error);
  }
})