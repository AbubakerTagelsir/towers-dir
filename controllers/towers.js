const {Tower} = require("../models/");

module.exports = {
  // create
  async createTower(req, res) {
    const {name,location,noFloors,noOffices,rating,longitude,latitude} = req.body;
    if(!name || !location || !longitude || !latitude){
      return res.status(401).send({name: "please fill all mandatory fields!"})
    }
    try {
      const newTower = await Tower.create({
        name: name,
        location: location,
        noFloors: noFloors,
        noOffices: noOffices,
        rating: rating,
        longitude: longitude,
        latitude: latitude,
      });
      res.status(201).send(newTower);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  // list

  async listTowers(req, res) {
    const {showWithTowers} = req.query;
    let searchFilter = {}
    if(showWithTowers){
    }
    try {
      const towersList = await Tower.findAll(searchFilter);

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
       return res.status(404).send("Tower Not Found");
      } 
      await existingTower.update(req.body);
      return res.status(200).send(existingTower);
      
    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
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
