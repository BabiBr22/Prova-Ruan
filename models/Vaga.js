const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vaga = sequelize.define('Vaga', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salario: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
});

module.exports = Vaga;
