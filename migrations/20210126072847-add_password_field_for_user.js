'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'Users',
      'password',
      {
        type: Sequelize.DataTypes.STRING,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.removeColumn('Users', 'password');
  }
};
