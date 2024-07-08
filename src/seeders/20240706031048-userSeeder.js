'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
          name: "Victor Bittencourt",
          age: 20,
          gender: "Masculino",
          cpf: "05476242040",
          phone_number: "(51)983149920",
          email: "victor@proto.com",
          postal_code: "94197150",
          general_role: "Programador FullStack",
          skilled_with: 21,
          createdAt: new Date(),
          updatedAt: new Date()
      }, {
        name: "Joel Bittencourt",
          age: 72,
          gender: "Masculino",
          cpf: "25263617020",
          phone_number: "(51)981382150",
          email: "joel@proto.com",
          postal_code: "94197150",
          general_role: "Consultor de Segurança",
          skilled_with: 24,
          createdAt: new Date(),
          updatedAt: new Date()
      }
  ], {});
},


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
