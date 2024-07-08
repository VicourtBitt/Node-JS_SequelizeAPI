'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jobExperiences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role_at_time: {
        type: Sequelize.STRING
      },
      average_payment: {
        type: Sequelize.FLOAT
      },
      people_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "users", key: "id"}
      },
      company_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "companies", key: "id"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jobExperiences');
  }
};