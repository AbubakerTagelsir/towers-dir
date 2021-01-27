'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Office extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  Office.init({
    name: DataTypes.STRING,
    floor: DataTypes.INTEGER,
    towerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tower',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Office',
  });
  return Office;
};