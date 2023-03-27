    const router = require('express').Router();
const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes.js'); hay que eliminar home routes
// added menu routes
const homeRoutes = require('./home-routes.js');
// added orderRoutes

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;