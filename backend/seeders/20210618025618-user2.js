'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Annie',
      lastName: 'Easley',
      email: 'ajeasley@nasa.gov',
      password: 'annieiseasy',
      userName: 'easyAnnie',
      phoneNumber: 8161234567,
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
