const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://barbara:o6oq-5psSjRTZdeLmRn9TQ@senai-api-1691.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full', {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Isso evita erros SSL
    },
  },
});

module.exports = sequelize;


