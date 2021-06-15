'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Users', [{
     firstName: 'Jim',
     lastName: 'Bob',
     email: 'jimBob@gmail.com',
     createdAt: new Date(),
     updatedAt: new Date()
   }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
