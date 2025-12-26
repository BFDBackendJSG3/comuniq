'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LogDeAcao extends Model {
    static associate(models) {
      LogDeAcao.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'usuario',
      });
    }
  }
  LogDeAcao.init(
    {
      userId: DataTypes.INTEGER,
      acao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      entidade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      entidadeId: DataTypes.INTEGER,
      descricao: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'LogDeAcao',
      tableName: 'LogDeAcoes',
    }
  );

  return LogDeAcao;
};
