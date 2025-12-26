'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LogDeAcoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      acao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      entidade: {
        type: Sequelize.STRING,
      },
      entidadeId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      descricao: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addIndex('LogDeAcoes', ['userId']);
    await queryInterface.addIndex('LogDeAcoes', ['entidade']);
    await queryInterface.addIndex('LogDeAcoes', ['entidadeId']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LogDeAcoes');
  },
};
