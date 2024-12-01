const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Configuração do CORS
app.use(cors());
app.use(express.json());

let usuarios = [];

app.post('/adicionarUsuario', (req, res) => {
    const { nome, email } = req.body;
    usuarios.push({ nome, email });
    res.send('Usuário adicionado com sucesso!');
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
