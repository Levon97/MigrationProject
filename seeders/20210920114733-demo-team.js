'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teams', [{
      teamName: 'shenqiTeam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Bananc',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Lakers',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teams', null, {});
  }
};