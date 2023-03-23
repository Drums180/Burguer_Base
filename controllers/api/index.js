const router = require('express').Router();

const ingredientsRoutes = require('./ingredients-routes');

router.use('/ingredients', ingredientsRoutes);

module.exports = router;