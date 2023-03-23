const { Ingredients } = require('../models');
const ingredientsData = [
  {
    name: 'bread',
    cost: 80,
    price: 160,
    stock: 50,
    category_id: 1,
  },
  {
    name: 'lettuce',
    cost: 48,
    price: 96,
    stock: 30,
    category_id: 2,
  },
  {
    name: 'meat',
    cost: 320,
    price: 640,
    stock: 10,
    category_id: 3,
  },
  {
    name: 'bacon',
    cost: 160,
    price: 320,
    stock: 50,
    category_id: 3,
  },
  {
    name: 'cheese',
    cost: 128,
    price: 256,
    stock: 40,
    category_id: 4,
  },
  {
    name: 'tomato',
    cost: 32,
    price: 64,
    stock: 20,
    category_id: 2,
  },
  {
    name: 'mayonnaise',
    cost: 32,
    price: 64,
    stock: 30,
    category_id: 5,
  },
  {
    name: 'pineapple',
    cost: 64,
    price: 128,
    stock: 40,
    category_id: 6,
  },
  {
    name: 'jalapeño',
    cost: 32,
    price: 64,
    stock: 10,
    category_id: 2,
  },
  {
    name: 'onion',
    cost: 48,
    price: 96,
    stock: 30,
    category_id: 2,
  },
  {
    name: 'ketchup',
    cost: 32,
    price: 64,
    stock: 30,
    category_id: 5,
  },
];

const seedIngredients = () => Ingredients.bulkCreate(ingredientsData);

module.exports = seedIngredients;
