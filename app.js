const express = require('express');
const sequelize = require('./config/database'); // Caminho para o seu arquivo de configuração do banco
const Vaga = require('./models/Vaga'); // Caminho para o seu model de Vagas

const app = express();

app.use(express.json());

// Sincroniza o banco de dados
sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado.');
        // Aqui você pode iniciar o servidor
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });
    })
    .catch((error) => {
        console.error('Erro ao sincronizar o banco de dados:', error);
    });
