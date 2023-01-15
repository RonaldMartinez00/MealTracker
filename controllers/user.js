const User = require('../models/User');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// routes
router.get('/', async (req, res) => {
    try {
       const users = await User.find();
       console.log(users);
       res.json(users)
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  });
  

module.exports = router;