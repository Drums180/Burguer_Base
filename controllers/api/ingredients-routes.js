const router = require('express').Router();
const { Ingredients } = require('../../models');

// Get all ingredients
router.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredients.findAll();
    res.json(ingredients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve ingredients' });
  }
});

// Get a single ingredient by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const ingredient = await Ingredients.findByPk(id);
    if (!ingredient) {
      return res.status(404).json({ error: 'Ingredient not found' });
    }
    res.json(ingredient);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve ingredient' });
  }
});

// Update the stock for a specific ingredient
router.put('/', async (req, res) => {
  try {
    // Get the ingredients object from the request body
    const ingredients = req.body;

    // Call the updateStock method on the Ingredients model to update the stock
    await Ingredients.updateStock(ingredients);

    // Send a success response
    res.status(200).json({ message: 'Ingredients stock updated successfully.' });
  } catch (err) {
    // Send an error response if there's an error
    res.status(500).json(err);
  }
});


module.exports = router;
