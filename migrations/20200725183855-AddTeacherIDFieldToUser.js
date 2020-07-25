'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn("Users", "teacher_id", {
    type:Sequelize.INTEGER,
    onDelete:"SET NULL", 
    references:{
      model:"Teachers",
      key:"id"
   }})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Users", "teacher_id");
  }
};
