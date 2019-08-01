function valida() {
  var nome = document.getElementById('nome')
  if(nome.value == "") {
    alert("Seu nome no formulario não pode estar em branco")
  }else {
    alert("Seu formulário pode ser enviado com sucesso")
  }
}
