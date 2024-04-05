document.addEventListener("DOMContentLoaded", function() {
  var mensagem = document.getElementById("mensagem");
  mensagem.style.display = "block";
  setTimeout(function(){
    mensagem.style.display = "none";
  }, 5000); // A mensagem será exibida por 5 segundos (5000 milissegundos)
});


// Função para realizar o login
function fazerLogin() {
  // Pegar os valores dos campos de email e senha
  var email = document.getElementById('exampleInputEmail1').value;
  var senha = document.getElementById('exampleInputPassword1').value;

  // Verificar se os campos estão preenchidos
  if (email && senha) {
    // Verificar se o email e a senha correspondem aos valores armazenados no Local Storage
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('senha');

    if (email === storedEmail && senha === storedPassword) {
      alert('Login realizado com sucesso!');
      // Fechar o modal após o login bem-sucedido
      $('#loginModal').modal('hide');
    } else {
      // Exibir mensagem de erro se as credenciais estiverem incorretas
      document.getElementById('loginErrorMessage').innerText = 'Credenciais inválidas. Por favor, tente novamente.';
    }
  } else {
    // Exibir mensagem de erro se os campos não estiverem preenchidos
    document.getElementById('loginErrorMessage').innerText = 'Por favor, preencha todos os campos.';
  }
}

// Adicionar evento de submit ao formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir o envio padrão do formulário
  fazerLogin(); // Chamar a função de login
});

