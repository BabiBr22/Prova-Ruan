const { Sequelize } = require('sequelize');

// Configuração da conexão com o CockroachDB
const sequelize = new Sequelize('postgresql:', {
  dialect: 'postgres', // Dialeto para o CockroachDB é 'postgres'
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Ignora a verificação do certificado SSL
    },
  },
  logging: console.log, // Habilita o logging
});

module.exports = sequelize;
