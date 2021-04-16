'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    static associate(models) {
      Produtos.belongsTo(models.Marcas, { foreignKey:'marca_id'})
      Produtos.belongsTo(models.Estilos, {foreignKey: 'estilo_id'})
      Produtos.belongsTo(models.Cores, {foreignKey: 'cor_id'})
      Produtos.hasMany(models.Fotos, {foreignKey: 'produto_id'})
    }
  };
  Produtos.init({
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
    modelName: 'Produtos',
  });
  return Produtos;
};