const express = require('express');
const sequelize = require('./config/database'); // Caminho para o seu arquivo de configuração do banco
const Vaga = require('./models/Vaga'); // Caminho para o seu model de Vagas

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Teste simples de rota para verificar se o servidor está funcionando
app.get('/', (req, res) => {
    res.send('API rodando');
});

// Sincroniza o banco de dados e inicia o servidor
sequelize.authenticate() // Verifica a conexão com o banco
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida.');

        // Sincroniza os modelos com o banco de dados
        return sequelize.sync();
    })
    .then(() => {
        console.log('Banco de dados sincronizado.');

        // Inicia o servidor
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });
    })
    .catch((error) => {
        console.error('Erro ao conectar ou sincronizar o banco de dados:', error);
    });
