const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRouter = require('./src/routes/user.router'); // Importa o roteador de usuário
const apostasRouter = require('./src/routes/apostas.router'); // Importa o roteador de apostas

require('./src/models/connection'); // Importa a configuração da conexão do banco de dados

const app = express();


app.use(cors()); // Middleware para lidar com CORS (Cross-Origin Resource Sharing)
app.use(express.json()); // Middleware para análise do corpo da solicitação como JSON
app.use(morgan('dev')); // Middleware para registro de solicitações no console em modo de desenvolvimento


app.use('/apostas', apostasRouter); // Define a rota base '/apostas' usando o roteador de apostas
app.use('/user', userRouter); // Define a rota base '/user' usando o roteador de usuário

module.exports = app;
