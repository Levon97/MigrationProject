'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
      userName: 'John',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userName: 'Sergey',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userName: 'Armine',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
