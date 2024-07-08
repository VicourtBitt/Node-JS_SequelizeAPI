'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('companies', [{
      company_name: "General Motors do Brasil LTDA",
      cnpj: "59.275.792/0035-07",
      company_type: "Automotiva",
      company_size: "Multi-nacional",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      company_name: "Perto S.A. Perifericos para Automação",
      cnpj: "92.080.035/0008-72",
      company_type: "Industrial",
      company_size: "Multi-nacional",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('companies', null, {});
     */
  }
};
