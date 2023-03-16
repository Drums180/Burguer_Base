const seedIngredients = require('./ingredients-seeds');
const seedCategories = require('./category-seeds');
const seedSuppliers = require('./suppliers-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedIngredients();
  console.log('\n----- INGREDIENTS SEEDED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedSuppliers();
  console.log('\n----- SUPPLIERS SEEDED -----\n');

  process.exit(0);
};

seedAll();
