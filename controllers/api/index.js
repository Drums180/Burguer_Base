const router = require('express').Router();

const ingredientsRoutes = require('./ingredients-routes');
const userRoutes = require('./user-routes');


router.use('/ingredients', ingredientsRoutes);
router.use('/users', userRoutes);

module.exports = router;