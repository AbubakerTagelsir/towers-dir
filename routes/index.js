const router = require('express').Router();
const towersRoutes = require('./towers');
const authRoutes = require('./auth');
const userRoutes = require('./users');

router.use('/towers', towersRoutes);

router.use('/auth', authRoutes);

router.use('/user', userRoutes);

module.exports = router;