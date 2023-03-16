const { Ingredients } = require('./models');
const ingredientsData = [
  {
    name: 'Bread',
    cost: 80,
    price: 160,
    weight: 50,
    category_id: 1,
  },
  {
    name: 'Lettuce',
    cost: 48,
    price: 96,
    weight: 30,
    category_id: 2,
  },
  {
    name: 'Meat',
    cost: 320,
    price: 640,
    weight: 100,
    category_id: 3,
  },
  {
    name: 'Bacon',
    cost: 160,
    price: 320,
    weight: 50,
    category_id: 3,
  },
  {
    name: 'Cheese',
    cost: 128,
    price: 256,
    weight: 40,
    category_id: 4,
  },
  {
    name: 'Tomato',
    cost: 32,
    price: 64,
    weight: 20,
    category_id: 2,
  },
  {
    name: 'Mayonnaise',
    cost: 32,
    price: 64,
    weight: 30,
    category_id: 5,
  },
  {
    name: 'Pineapple',
    cost: 64,
    price: 128,
    weight: 40,
    category_id: 6,
  },
  {
    name: 'Jalapeño',
    cost: 32,
    price: 64,
    weight: 10,
    category_id: 2,
  },
  {
    name: 'Onion',
    cost: 48,
    price: 96,
    weight: 30,
    category_id: 2,
  },
  {
    name: 'Ketchup',
    cost: 32,
    price: 64,
    weight: 30,
    category_id: 5,
  },
];

const seedIngredients = () => Ingredients.bulkCreate(ingredientsData);

module.exports = seedIngredients;
