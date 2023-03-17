const router = require('express').Router();
const { Ingredients, Category, Suppliers } = require('../models');

router.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredients.findAll();
    const categories = await Category.findAll();
    const suppliers = await Suppliers.findAll();

    res.render('orders', { ingredients, categories, suppliers });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
