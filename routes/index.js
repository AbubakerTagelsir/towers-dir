const router = require('express').Router();
const towersRoutes = require('./towers');

router.use('/towers', towersRoutes);


module.exports = router;