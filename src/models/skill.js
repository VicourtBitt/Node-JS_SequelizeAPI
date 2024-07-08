'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Skill.hasMany(models.User, {foreignKey: "skilled_with"})
    }
  }
  Skill.init({
    skill: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Skill',
    tableName: 'skills'
  });
  return Skill;
};