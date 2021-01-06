'use strict'
module.exports = {
  up:(queryInterface, Sequelize) => {
    return  Promise.all([queryInterface.addColumn(
      'users',
      'isAdmin',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        allowNull: false
      }),
    ]);
  },
  down: async (queryInterface, Sequelize) => {
   
  }
};
