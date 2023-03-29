const { Category, Supplier } = require('../models');

const categoryData = [
  {
    name: 'Bread',
    supplier_id: 4,
  },
  {
    name: 'Vegetables',
    supplier_id: 14,
  },
  {
    name: 'Meat',
    supplier_id: 24,
  },
  {
    name: 'Dairy',
    supplier_id: 4,
  },
  {
    name: 'Sauces',
    supplier_id: 34,
  },
  {
    name: 'Fruit',
    supplier_id: 14,
  },
];

const seedCategories = async () => {
  await Category.bulkCreate(categoryData);
};

module.exports = seedCategories;
