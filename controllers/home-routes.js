const router = require('express').Router();
const { Ingredients, Category, Suppliers } = require('../models');

// Here is where we provide hardcoded data to render dynamically
const hamburgers = [
  {
    burger_name: 'Cheese Burger',
    description: 'Burger with cheese, lettuce, tomato, and onion',
    photo:"../public/assets/cheese.jpg",
    id: 1,
    ingredients: {
      bread:2,
      meat: 2,
      cheese: 1,
      lettuce: 5,
      tomato: 5,
      onion: 5,
      ketchup: 2,
      mayo: 2,
    },
  },
  {
    burger_name: 'Classic Burger',
    description: 'Burger with lettuce, tomato, and onion',
    photo:"../public/assets/classic.jpg",
    id: 2,
    ingredients: {
      bread: 2,
      meat: 2,
      lettuce: 5,
      tomato: 5,
      onion: 5,
      ketchup: 2,
      mayo: 2,
    },
  },
  {
    burger_name: 'Hawaiian Burger',
    description: 'Burger with pineapple, lettuce, tomato, and onion',
    photo:"../public/assets/hawaiian.jpg",
    id: 3,
    ingredients: {
      bread: 2,
      meat: 2,
      pineapple: 1,
      lettuce: 5,
      tomato: 5,
      onion: 5,
      ketchup: 2,
      mayo: 2,
    },
  },
];

router.get('/', async (req, res) => {
  console.log('view log in', req);
  res.render('login');
});

// Endpoint to get the hamburgers array
router.get('/api/hamburgers', (req, res) => {
  res.json(hamburgers);
});

router.get('/api/hamburgers/:name', (req, res) => {
  const burger = hamburgers.find(b => b.burger_name === req.params.name);
  if (burger) {
    res.json(burger);
  } else {
    res.status(404).json({ message: 'Burger not found' });
  }
});

//get all menu
router.get('/menu', async (req, res) => {
  if (req.session.loggedIn) {
  console.log('get all burgers view', req);
  res.render('menu', { hamburgers });
}
  else {
    res.redirect('/')

  }  
});

router.get('/menu/:id', async (req, res) => {
  console.log('get one burger view', req);
  // This method renders the 'burger' template, and uses params to select the correct burger to render in the template, based on the id of the burger.
  res.render('menu', hamburgers[req.params.num - 1]);
  //  return was deleted
});

router.get('/order', async (req, res) => {
  if (req.session.loggedIn) {
    try {
      const ingredientData = await Ingredients.findAll();
      const ingredients = ingredientData.map((ingredient) => ingredient.get({ plain: true }));
      
      // Pass the ingredients to the orders template
      res.render('order', { ingredients });
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }} else {
      res.redirect('/')
  
    }  
});



module.exports = router;
