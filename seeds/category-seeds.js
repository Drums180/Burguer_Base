const { Category } = require('./models');

const categoryData = [
  {
    name: 'Breads',
  },
  {
    name: 'Vegetables',
  },
  {
    name: 'Meats',
  },
  {
    name: 'Dairy',
  },
  {
    name: 'Sauces',
  },
  {
    name: 'Fruits',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
