'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cad_produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cad_produtos.init({
    descricao: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    cor: DataTypes.STRING,
    tamanho: DataTypes.STRING,
    genero: DataTypes.STRING,
    estilo: DataTypes.STRING,
    preco: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'cad_produtos',
  });
  return cad_produtos;
};