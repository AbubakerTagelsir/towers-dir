const userControllers = require('../controllers/users');

const router = require('express').Router();


router.get('/login', userControllers.login);

router.put('/:towerId', towersController.updateTower);

router.post('/', towersController.createTower);

router.get('/search/:keyword', towersController.searchTowers);

router.get('/', userControllers.listUsers);

router.delete('/', userControllers.deleteUser);

module.exports = router;