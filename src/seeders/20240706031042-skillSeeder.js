'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('skills', [{
      skill: "Python",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      skill: "Solda",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      skill: "Automação",
      createdAt: new Date(),
      updatedAt: new Date()
    } , {
      skill: "C++",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      skill: "Medicina",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      skill: "Supervisão",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('skills', null, {});

  }
};
