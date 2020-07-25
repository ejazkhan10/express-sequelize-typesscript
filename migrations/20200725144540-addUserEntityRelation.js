'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "user_entity", {
        user_id: {
          type:Sequelize.INTEGER,
          onDelete:"SET NULL", 
          references:{
            model:"Users",
            key:"id"
          }
        },
        entity_id: {
          type:Sequelize.INTEGER,
          onDelete:"SET NULL", 
          references:{
            model:"Entities",
            key:"id"
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
      
    )
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("user_entity")
  }
};
