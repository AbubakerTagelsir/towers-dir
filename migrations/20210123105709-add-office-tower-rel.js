'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Offices', 
    "towerId",
    {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Towers',
        },
        key: 'id'
      },
      allowNull: false
    }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Office', 'towerId');
  }
}
