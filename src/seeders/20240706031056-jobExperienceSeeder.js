'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('jobExperiences', [{
      role_at_time: "Programador",
      average_payment: 2800,
       people_id: 1,
       company_id: 7,
       createdAt: new Date(),
       updatedAt: new Date()
     }, {
      role_at_time: "Consultor",
      average_payment: 4500,
      people_id: 2,
      company_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
     }     
    ], {});

  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('jobExperiences', null, {});
    
  }
};
