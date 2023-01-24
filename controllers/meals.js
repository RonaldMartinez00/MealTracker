const mealsModel = require('../models/meals');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// get meals
router.get('/', async (req, res) => {
    try {
       const meals = await mealsModel.findOne({});
       console.log(meals);
       res.json(meals)
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
});
//create new meal
router.post('/' ,async (req, res) => {
    try {
        const newMeal = new mealsModel(req.body);
        const savedMeal = await newMeal.save();
        res.json(savedMeal);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});
//update meal
router.put('/:id',async (req, res) => {
    try {
        const updatedMeal = await mealsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMeal);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});
//delete meal
router.delete('/:id',async (req, res) => {
    try {
        const deletedMeal = await mealsModel.findByIdAndDelete(req.params.id);
        if (!deletedMeal) {
            return res.status(404).send("Meal not found");
        }
        res.json(deletedMeal);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});



module.exports = router;