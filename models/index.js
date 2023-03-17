const Category = require('./Category');
const Ingredients = require('./Ingredients');
const Suppliers = require('./Suppliers');

// Define the one-to-many relationship between Ingredients and Category
Ingredients.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Ingredients, { foreignKey: 'category_id' });

// Define the one-to-many relationship between Suppliers and Category
Suppliers.hasMany(Category, { foreignKey: 'supplier_id' });
Category.belongsTo(Suppliers, { foreignKey: 'supplier_id' });

// Export the models 
module.exports = {
  Category,
  Ingredients,
  Suppliers,
};
