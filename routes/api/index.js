const routes = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
const { Router } = require('express');

router.use('/users', userRoutes);
router.use('/thoughts', thought-routes);


module.exports = router; 