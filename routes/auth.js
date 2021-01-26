const router = require('express').Router();
const authControllers = require('../controllers/auth');

router.post('/register', authControllers.registerUser);

router.post('/login', authControllers.login);

router.get('/logout', authControllers.logout);

module.exports = router;