document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    fetch('http://localhost:3000/adicionarUsuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email })
    }).then(response => response.text())
      .then(data => {
          alert(data);
          document.getElementById('userForm').reset();
      })
      .catch(error => console.error('Erro:', error));
});

document.getElementById('showUsersButton').addEventListener('click', carregarUsuarios);

function carregarUsuarios() {
    fetch('http://localhost:3000/usuarios')
        .then(response => response.json())
        .then(data => {
            const listaUsuarios = document.getElementById('usuariosList');
            listaUsuarios.innerHTML = '';
            data.forEach(usuario => {
                const li = document.createElement('li');
                li.textContent = `Nome: ${usuario.nome}, Email: ${usuario.email}`;
                listaUsuarios.appendChild(li);
            });
        })
        .catch(error => console.error('Erro:', error));
}