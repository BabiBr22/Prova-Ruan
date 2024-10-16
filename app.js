const express = require('express');
const sequelize = require('./config/database.js');
const vagaRouter = require('./routes/vagaRoutes.js'); // Importando o roteador de vagas

const app = express();

app.use(express.json());
app.use(vagaRouter); // Usando o roteador

sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado.');
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });
    })
    .catch((error) => {
        console.error('Erro ao sincronizar o banco de dados:', error);
    });
