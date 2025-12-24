'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fontes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      responsavel: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      dadosDeContato: {
        type: Sequelize.STRING
      },
      outrosLinks: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      classeTitulo: {
        type: Sequelize.STRING
      },
      classeCorpo: {
        type: Sequelize.STRING
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

    await queryInterface.addIndex('Fontes', ['url']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Fontes');
  }
};