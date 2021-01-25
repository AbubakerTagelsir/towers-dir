const towersController = require('../controllers/towers');

const router = require('express').Router();


router.get('/', towersController.listTowers);

router.put('/:towerId', towersController.updateTower);

router.post('/', towersController.createTower);

router.get('/search/:keyword', towersController.searchTowers);

router.get('/:towerId', towersController.fetchTower);

router.delete('/', towersController.deleteTower);

module.exports = router;