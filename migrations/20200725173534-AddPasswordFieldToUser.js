'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn("Users", "password", {
        type:Sequelize.DataTypes.STRING
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Users", "password")
  }
};
