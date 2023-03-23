const Category = require('./Category');
const Ingredients = require('./Ingredients');
const Suppliers = require('./Suppliers');

// Define the many-to-many relationship between Ingredients and Category
Category.belongsToMany(Ingredients, { through: 'CategoryIngredients', foreignKey: 'category_id' });
Ingredients.belongsToMany(Category, { through: 'CategoryIngredients', foreignKey: 'ingredient_id' });

// Define the one-to-many relationship between Suppliers and Category
Suppliers.hasMany(Category, { foreignKey: 'supplier_id' });
Category.belongsTo(Suppliers, { foreignKey: 'supplier_id' });

// Export the models 
module.exports = {
  Category,
  Ingredients,
  Suppliers,
};
