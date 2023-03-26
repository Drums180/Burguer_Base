const router = require('express').Router();
const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes.js'); hay que eliminar home routes
// added menu routes
const menuRoutes = require('./menu-routes');
// added orderRoutes
const orderRoutes = require('./order-routes');

router.use('/', menuRoutes);
router.use('/orders', orderRoutes);
router.use('/api', apiRoutes);

module.exports = router;