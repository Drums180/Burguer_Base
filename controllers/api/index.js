const router = require('express').Router();

const ingredientsRoutes = require('./ingredients-routes');
const ordersRoutes = require('./orders-routes');

router.use('/ingredients', ingredientsRoutes);
router.use('/orders', ordersRoutes);

module.exports = router;