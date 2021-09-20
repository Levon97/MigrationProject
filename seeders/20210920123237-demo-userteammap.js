'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserTeamMaps', [{
    userId: 1,
    teamId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserTeamMaps', null, {});
  }
};
