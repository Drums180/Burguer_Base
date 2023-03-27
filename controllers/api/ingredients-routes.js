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

// Get a single ingredient by name
router.get('/name/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const ingredient = await Ingredients.findOne({ where: { name: name.toLowerCase() } });
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
router.put('/name/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const { stock } = req.body;

    const ingredient = await Ingredients.findOne({ where: { name: name.toLowerCase() } });

    if (!ingredient) {
      return res.status(404).json({ error: 'Ingredient not found' });
    }

    await ingredient.update({ stock: parseFloat(ingredient.stock) + parseFloat(stock) });

    res.json({ message: 'Ingredient stock updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update ingredient stock', details: err.message });
  }
});

module.exports = router;
