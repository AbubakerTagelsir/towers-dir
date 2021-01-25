const modelsRef = require("../models/index");

const Tower = modelsRef.Tower;

module.exports = {
  // create
  async createTower(req, res) {
    try {
      const newTower = await Tower.create({
        name: req.body.name,
        location: req.body.location,
        noFloors: req.body.noFloors,
        noOffices: req.body.noOffices,
        rating: req.body.rating,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
      });
      res.status(201).send(newTower);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  // list

  async listTowers(req, res) {
    try {
      const towersList = await Tower.findAll({});

      if (!towersList) {
        return res.status(404).send("No towers available!");
      }

      res.status(201).send(towersList);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  // fetch
  async fetchTower(req, res) {
    try {
      const requestedTower = await Tower.find({ id: req.params.towerId });
      if (!requestedTower) {
        return res.status(404).send("the requested tower is not available!");
      }
      res.status(201).send(towersList);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  // update
  async updateTower(req, res) {
    try {
      const existingTower = await Tower.find({
        id: req.params.towerId,
      });

      if (existingTower) {
        const updatedTower = await existingTower.update(req.body);

        res.status(201).send(updatedTower);
      } else {
        res.status(404).send("Tower Not Found");
      }
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  // delete
  async deleteTower(req, res) {
    try {
      const toDeleteTower = await Tower.find({
        id: req.params.towerId,
      });

      if (toDeleteTower) {
        await Tower.destry({
          where: {
            id: req.params.towerId,
          },
        });

        res.status(201).send("Tower removed!");
      } else {
        res.status(404).send("Tower Not Found");
      }
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  // search
  async searchTowers(req, res) {
    try {
      const towersList = await Tower.find({});

      if (!towersList) {
        return res.status(404).send("No towers available!");
      }

      res.status(201).send(towersList);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
};
