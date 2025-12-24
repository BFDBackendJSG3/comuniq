'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fonte extends Model {
    static associate(models) {
      // define association here
    }
  }
  Fonte.init({
    responsavel: DataTypes.STRING,
    tipo: DataTypes.STRING,
    url: DataTypes.STRING,
    dadosDeContato: DataTypes.STRING,
    outrosLinks: DataTypes.STRING,
    status: DataTypes.STRING,
    classeTitulo: DataTypes.STRING,
    classeCorpo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fonte',
  });
  return Fonte;
};