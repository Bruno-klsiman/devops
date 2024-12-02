document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Formulário de usuário enviado');
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    fetch('http://localhost:3001/adicionarUsuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email })
    }).then(response => {
        console.log('Resposta recebida', response);
        return response.text();
    })
    .then(data => {
        console.log('Dados recebidos', data);
        alert(data);
        document.getElementById('userForm').reset();
    })
    .catch(error => console.error('Erro ao adicionar usuário:', error));
});

document.getElementById('showUsersButton').addEventListener('click', function () {
    console.log('Botão "Exibir Cadastros" clicado');
    carregarUsuarios();
});

function carregarUsuarios() {
    fetch('http://localhost:3001/usuarios')
        .then(response => {
            console.log('Resposta recebida', response);
            return response.json();
        })
        .then(data => {
            console.log('Dados recebidos', data);
            const listaUsuarios = document.getElementById('usuariosList');
            listaUsuarios.innerHTML = '';
            data.forEach(usuario => {
                const li = document.createElement('li');
                li.textContent = `Nome: ${usuario.nome}, Email: ${usuario.email}`;
                listaUsuarios.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao carregar usuários:', error));
}
