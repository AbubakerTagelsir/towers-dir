const userControllers = require('../controllers/users');

const router = require('express').Router();

const passport = require('passport');


router.get('/:userId', userControllers.getUser);

router.put('/:userId', passport.authenticate('jwt', {session: false}), userControllers.updateUser);

router.get('/', userControllers.listUsers);

router.delete('/', passport.authenticate('jwt', {session: false}), userControllers.deleteUser);

module.exports = router;