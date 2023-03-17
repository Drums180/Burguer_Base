const router = require('express').Router();
const { Ingredients } = require('../models');

// Get all ingredients
router.get('/ingredients', async (req, res) => {
  try {
    const ingredients = await Ingredients.findAll();
    res.json(ingredients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve ingredients' });
  }
});

// Get a single ingredient by id
router.get('/ingredients/:id', async (req, res) => {
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

module.exports = router;
