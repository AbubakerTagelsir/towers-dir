const userControllers = require('../controllers/users');

const router = require('express').Router();


router.get('/:userId', userControllers.getUser);

router.put('/:userId', userControllers.updateUser);

router.get('/', userControllers.listUsers);

router.delete('/', userControllers.deleteUser);

module.exports = router;