const router = require('express').Router();

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
router.get('/', async (req, res) => {
  res.render('all-burgers');
});

//get one burger
router.get('/burger/:num', async (req, res) => {
  // This method renders the 'burger' template, and uses params to select the correct burger to render in the template, based on the id of the burger.
  return res.render('burger', hamburgers[req.params.num - 1]);
});

module.exports = router;
