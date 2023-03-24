const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', menuRoutes);
router.use('/orders', orderRoutes);
router.use('/api', apiRoutes);

module.exports = router;