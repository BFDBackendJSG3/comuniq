"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Configuracao extends Model {
    static associate(models) {
      // Configuração pode pertencer a um usuário
      Configuracao.belongsTo(models.User, {
        foreignKey: "userId",
        as: "usuario",
      });
    }
  }
  Configuracao.init(
    {
      chave: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      valor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descricao: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Configuracao",
      tableName: "Configuracoes",
    }
  );

  return Configuracao;
};
