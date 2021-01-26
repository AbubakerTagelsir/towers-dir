const towersController = require('../controllers/towers');

const router = require('express').Router();

const passport = require('passport');
const useCache = require('../utils/cache');

require('../utils/cache');


router.get('/', useCache(100), towersController.listTowers);

router.put('/:towerId', passport.authenticate('jwt', {session: false}), towersController.updateTower);

router.post('/', passport.authenticate('jwt', {session: false}), towersController.createTower);

router.get('/search/', towersController.searchTowers);

router.get('/:towerId', towersController.fetchTower);

router.delete('/', passport.authenticate('jwt', {session: false}), towersController.deleteTower);

module.exports = router;