const models = require("../models/");

const Tower = models.Tower;

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
    const {towerId} = req.params;
    try {
      const requestedTower = await Tower.findOne({where:{ id: towerId }});
      if (!requestedTower) {
        return res.status(404).send("the requested tower is not available!");
      }
      res.status(201).send(requestedTower);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  // update
  async updateTower(req, res) {
      const {towerId} = req.params;
    try {
      const existingTower = await Tower.findOne({
          where: { id: towerId }
      });

      if (!existingTower) {
        res.status(404).send("Tower Not Found");
      } 
      await existingTower.update(req.body);
      res.status(200).send(existingTower);
      
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  // delete
  async deleteTower(req, res) {
      const {towerId} = req.body; 
    try {
      const toDeleteTower = await Tower.findOne({
        where: { id: towerId },
      });

      if (toDeleteTower) {
        await Tower.destroy({
          where: {
            id: towerId,
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
      const towersList = await Tower.findOne({
          where: { id: towerId }
      });

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
