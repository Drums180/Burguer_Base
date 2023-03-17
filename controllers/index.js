const router = require('express').Router();
const burgerRoutes = require('./burgerRoutes');
const orderRoutes = require('./orderRoutes');


router.use('/burger', burgerRoutes);
router.use('/order', orderRoutes);

module.exports = router;
