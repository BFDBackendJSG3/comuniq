'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'TemasPrincipais',
      [
        {
          nome: 'Geral',
          descricao: 'Tema padrão do sistema',
          parentId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Política',
          descricao: 'Notícias sobre política',
          parentId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Saúde',
          descricao: 'Notícias sobre saúde pública',
          parentId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Educação',
          descricao: 'Notícias sobre educação',
          parentId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('TemasPrincipais', null, {});
  },
};

