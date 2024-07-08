'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobExperience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JobExperience.belongsTo(models.Company, {foreignKey: "company_id"})
      JobExperience.belongsTo(models.User, {foreignKey: "people_id"})
    }
  }
  JobExperience.init({
    role_at_time: DataTypes.STRING,
    average_payment: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'JobExperience',
    tableName: "jobExperiences"
  });
  return JobExperience;
};