const { Category } = require('./models');

const categoryData = [
  {
    name: 'Bread',
    ingredient_ids: [1],
  },
  {
    name: 'Vegetables',
    ingredient_ids: [2, 6, 9, 10],
  },
  {
    name: 'Meat',
    ingredient_ids: [3, 4],
  },
  {
    name: 'Dairy',
    ingredient_ids: [5],
  },
  {
    name: 'Sauces',
    ingredient_ids: [7, 11],
  },
  {
    name: 'Fruit',
    ingredient_ids: [8],
  },
];

const seedCategories = async () => {
  await Category.bulkCreate(categoryData, {
    include: 'ingredients',
  });
};

module.exports = seedCategories;
