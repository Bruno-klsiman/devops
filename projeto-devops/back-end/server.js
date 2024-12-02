const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

// Configuração do CORS
app.use(cors());
app.use(express.json());

let usuarios = [];

// Rota para a raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor back-end!');
});

// Rota para adicionar um usuário (POST)
app.post('/adicionarUsuario', (req, res) => {
    const { nome, email } = req.body;
    usuarios.push({ nome, email });
    res.send('Usuário adicionado com sucesso!');
});

// Rota para obter usuários (GET)
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
