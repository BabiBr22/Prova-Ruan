const { Sequelize } = require('sequelize');

// Configuração da conexão com o CockroachDB
const sequelize = new Sequelize('postgresql://barbara:o6oq-5psSjRTZdeLmRn9TQ@senai-api-1691.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb', {
  dialect: 'postgres', // Dialeto para o CockroachDB é 'postgres'
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Ignora a verificação do certificado SSL
    },
  },
  logging: false, // Desativa o log de SQL, útil para produção (pode ativar se precisar de debug)
});

module.exports = sequelize;
