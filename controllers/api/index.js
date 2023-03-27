const router = require('express').Router();

const ingredientsRoutes = require('./ingredients-routes');
const ordersRoutes = require('./orders-routes');

const userRoutes = require('./user-routes');


router.use('/ingredients', ingredientsRoutes);
router.use('/orders', ordersRoutes);

router.use('/users', userRoutes);

module.exports = router;