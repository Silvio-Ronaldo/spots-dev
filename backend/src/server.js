// Importando dependências
const express = require('express'); // Express é um conjunto de funcionalidades prontas para ajudar no dev
const mongoose = require('mongoose'); // Mongoose é uma ferramenta que auxilia na manipulação do banco de dados
const cors = require('cors');
const path = require('path');

const routes = require('./routes'); // Importando as rotas

//Criando a aplicação
const app = express();

// Conectando ao banco de dados
mongoose.connect('mongodb+srv://silvioronaldo:omnistack9@omnistack9-udcjj.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors()); // Permite o front consumir sua api backend
app.use(express.json()); // Dizendo para o express usar JSON
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))); // Sempre que chamar o caminho /files, use o path definido
app.use(routes);

// Definindo resposta para uma rota
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar o corpo da requisição (para criação e edição)

// Definindo a porta em que o serviço será executado
app.listen(3333);