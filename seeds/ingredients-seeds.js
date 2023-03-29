const { Ingredients } = require('../models');
const ingredientsData = [
  {
    name: 'bread',
    cost: 80,
    price: 160,
    stock: 50,
    category_id: 4,
  },
  {
    name: 'lettuce',
    cost: 48,
    price: 96,
    stock: 80,
    category_id: 14,
  },
  {
    name: 'meat',
    cost: 320,
    price: 640,
    stock: 60,
    category_id: 24,
  },
  {
    name: 'bacon',
    cost: 160,
    price: 320,
    stock: 50,
    category_id: 24,
  },
  {
    name: 'cheese',
    cost: 128,
    price: 256,
    stock: 40,
    category_id: 34,
  },
  {
    name: 'tomato',
    cost: 32,
    price: 64,
    stock: 60,
    category_id: 14,
  },
  {
    name: 'mayonnaise',
    cost: 32,
    price: 64,
    stock: 70,
    category_id: 44,
  },
  {
    name: 'pineapple',
    cost: 64,
    price: 128,
    stock: 40,
    category_id: 54,
  },
  {
    name: 'jalapeño',
    cost: 32,
    price: 64,
    stock: 60,
    category_id: 14,
  },
  {
    name: 'onion',
    cost: 48,
    price: 96,
    stock: 90,
    category_id: 14,
  },
  {
    name: 'ketchup',
    cost: 32,
    price: 64,
    stock: 70,
    category_id: 44,
  },
];

const seedIngredients = () => Ingredients.bulkCreate(ingredientsData);

module.exports = seedIngredients;
