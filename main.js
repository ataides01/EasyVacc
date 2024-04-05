document.addEventListener("DOMContentLoaded", function() {
  var mensagem = document.getElementById("mensagem");
  mensagem.style.display = "block";
  setTimeout(function(){
    mensagem.style.display = "none";
  }, 5000); // A mensagem será exibida por 5 segundos (5000 milissegundos)
});


  // Função para validar o formulário de login antes do envio
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Obtém os valores dos campos de email e senha
    var emailValue = document.getElementById('exampleInputEmail1').value;
    var passwordValue = document.getElementById('exampleInputPassword1').value;

    // Verifica se os campos estão vazios
    if (emailValue === '' || passwordValue === '') {
      // Mostra a mensagem de erro
      document.getElementById('loginErrorMessage').style.display = 'block';
      // Impede o envio do formulário
      event.preventDefault();
    }
  });