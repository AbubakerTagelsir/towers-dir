'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          "name":"abubaker1",
          "email": "a@m.com",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name":"abubaker2",
          "email": "a2@m.com",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name":"abubaker3",
          "email": "a3@m.com",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name":"abubaker4",
          "email": "4@m.com",
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
