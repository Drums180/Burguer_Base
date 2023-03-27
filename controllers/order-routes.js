/*
const router = require('express').Router();
const { Ingredients, Category, Suppliers } = require('../models');


router.post('/', async (req, res) => {
  try {
    // Get the burger object from the request body
    const body = req.body;
    console.log(body);
    // const resp = await application.createOrder();
    // Send a success response
    const order = await Ingredients.create(body);
    res.redirect(`orders/${order.id}`)

  } catch (err) {
    // Send an error response if there's an error
    res.status(500).json(err);
  }
});

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

router.get('/:id', async(req, res) => {
  res.render('order', { id: 1, items: [] })
})

module.exports = router;
*/