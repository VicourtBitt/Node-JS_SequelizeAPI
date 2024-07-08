'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.JobExperience, {foreignKey: "people_id"})
      User.belongsTo(models.Skill, {foreignKey: "skilled_with"})
    }
  }
  User.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.ENUM("Masculino", "Feminino", "Não-Binário"),
    cpf: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    general_role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};