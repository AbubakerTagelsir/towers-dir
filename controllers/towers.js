const {Tower} = require("../models/");
const {Op} = require('sequelize');
const io = require('socket.io')();

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

      io.emit("towerCreation", {
        message: `${newTower.name} has been created!`
      });

      return res.status(201).send(newTower);
    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
  },

  // listing API

  async listTowers(req, res) {
    const {filters,sortBy,sortOrder,limit,offset} = req.body;
    const {showWithTowers} = req.query;

    let searchFilter = {where: {}}
    
    // limit & offset to apply pagination
    if(limit == parseInt(limit)){
      searchFilter.limit = limit;
    }
    if(offset == parseInt(offset)){
      searchFilter.offset = offset;
    }

    // parameters to show only offices towers
    if(showWithTowers){
    }

    // sorting
    if(sortBy){
      if(sortBy in ['id', 'name', 'location', 'noFloors', 'noOffices', 'longitude', 'latitude']){
        if(!sortOrder in ['ASC', 'DESC']){
          sortOrder = 'ASC';
        }
        searchFilter.order = [[sortBy, sortOrder]]
      }
    }


    // filter

    searchFilter.where = filters || {};


    try {
      const towersList = await Tower.findAndCountAll(searchFilter);

      if (!towersList) {
        return res.status(404).send("No towers available!");
      }
      setTimeout(() => {
        res.status(201).send(towersList);
  
      }, 5000);
      
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

    const {keyword} = req.query;
    const {searchBy} = req.body;
    const searchFilter = {}
    searchFilter[searchBy] = {[Op.like]: '%' + keyword + '%'};

    try {
      const towersList = await Tower.findAndCountAll({
          where: searchFilter
      });

      if (!towersList) {
        return res.status(404).send("No towers with the search criteria!");
      }

      res.status(201).send(towersList);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
};
