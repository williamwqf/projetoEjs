'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cad_produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      marca: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      cor: {
        type: Sequelize.STRING
      },
      tamanho: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      estilo: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.DECIMAL
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cad_produtos');
  }
};