'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Offices",
      [
        {
          "name":"SmartWings",
          "floor": 4,
          "towerId": 2,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name":"Ahoy",
          "towerId": 5,
          "floor": 3,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name":"Odoo",
          "towerId": 1,
          "floor": 4,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name":"NowMoney",
          "towerId": 3,
          "floor": 5,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkDelete("Users",null, {})
  }
};
