const router = require('express').Router();
const authControllers = require('../controllers/auth');
const passport = require('passport');

router.post('/register', authControllers.registerUser);

router.post('/login', authControllers.login);

router.get('/logout', passport.authenticate('jwt', {session: false}), authControllers.logout);

module.exports = router;