const { Category, Supplier } = require('../models');

const categoryData = [
  {
    name: 'Bread',
    supplier_id: 1,
  },
  {
    name: 'Vegetables',
    supplier_id: 2,
  },
  {
    name: 'Meat',
    supplier_id: 3,
  },
  {
    name: 'Dairy',
    supplier_id: 1,
  },
  {
    name: 'Sauces',
    supplier_id: 4,
  },
  {
    name: 'Fruit',
    supplier_id: 2,
  },
];

const seedCategories = async () => {
  await Category.bulkCreate(categoryData);
};

module.exports = seedCategories;
