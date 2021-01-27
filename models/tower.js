'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tower.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    noFloors: DataTypes.INTEGER,
    noOffices: DataTypes.INTEGER,
    rating: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tower',
  });

  Tower.associate = (models) => {
    Tower.hasMany(models.Office, {as: 'Offices'});
  };
  return Tower;
};