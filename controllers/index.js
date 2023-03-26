const router = require('express').Router();

const apiRoutes = require('./api');
const menuRoutes = require('./menu-routes');
const orderRoutes = require('./order-routes');


router.use('/menu', menuRoutes);
router.use('/', orderRoutes);
router.use('/api', apiRoutes);

module.exports = router;