const seedCategories = require('./category-seeds');
const seedIngredients = require('./ingredients-seeds');
const seedSuppliers = require('./suppliers-seeds');
const seedAdmin = require('./user-admin');

const sequelize = require('../config/connection');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedSuppliers();
    console.log('\n----- SUPPLIERS SEEDED -----\n');

    setTimeout(async () => {
      await seedCategories();
      console.log('\n----- CATEGORIES SEEDED -----\n');

      await seedIngredients();
      console.log('\n----- INGREDIENTS SEEDED -----\n');

      await seedAdmin();
      console.log('\n----- ADMIN SEEDED -----\n');

      process.exit(0);
    }, 5000);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAll();
