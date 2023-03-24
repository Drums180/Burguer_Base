const router = require('express').Router();
const { Ingredients, Category, Suppliers } = require('../models');

// Here is where we provide hardcoded data to render dynamically
const hamburgers = [
    {
      burger_name: 'Cheese Burger',
      description: 'Burger with cheese, lettuce, tomato, and onion',
      ingredients: {
        bread: 0.2,
        meat: 0.2,
        cheese: 0.1,
        lettuce: 0.05,
        tomato: 0.05,
        onion: 0.05,
        ketchup: 0.02,
        mayo: 0.02,
      },
    },
    {
      burger_name: 'Classic Burger',
      description: 'Burger with lettuce, tomato, and onion',
      ingredients: {
        bread: 0.2,
        meat: 0.2,
        lettuce: 0.05,
        tomato: 0.05,
        onion: 0.05,
        ketchup: 0.02,
        mayo: 0.02,
      },
    },
    {
      burger_name: 'Hawaiian Burger',
      description: 'Burger with pineapple, lettuce, tomato, and onion',
      ingredients: {
        bread: 0.2,
        meat: 0.2,
        pineapple: 0.1,
        lettuce: 0.05,
        tomato: 0.05,
        onion: 0.05,
        ketchup: 0.02,
        mayo: 0.02,
      },
    },
];

//get all burgers
router.get('/menu', async (req, res) => {
    console.log("get all burguers view", req)
    res.render('menu');
});
  
//get one burger
router.get('/menu/:id', async (req, res) => {
    console.log("get one burguer view", req)
    // This method renders the 'burger' template, and uses params to select the correct burger to render in the template, based on the id of the burger.
    res.render('menu', hamburgers[req.params.num - 1]);
    //  return was deleted
});
  
router.get('/order', async (req, res) => {
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
  