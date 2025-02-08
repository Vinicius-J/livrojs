function gerarCracha() {
  // cria referência aos elementos da página
  const inNome = document.getElementById("inNome");
  const outCracha = document.getElementById("outCracha");

  // obtém o conteúdo do campo de entrada
  let nome = inNome.value;

  // se vazio ou sem não há espaço no nome
  if (nome == '' || nome.indexOf(' ') == -1) {
    alert('Informe o nome completo do participante...');
    inNome.value = '';
    inNome.focus();
    return;
  }

  let priEspaco = nome.indexOf(' '); // posição do primeiro espaço
  let ultEspaco = nome.lastIndexOf(' '); // posição do último espaço

  // copia nome e sobrenome usando os parâmetros do substr()
  let cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

  // altera o texto identificado na página por outCracha
  outCracha.textContent = `Crachá: ${cracha}`;

  inNome.value = '';
  inNome.focus();
}

// cria referência ao botão e após associa function ao evento click
const btGerar = document.getElementById("btGerar");
btGerar.addEventListener('click', gerarCracha);