function gerarEmail() {
  // cria referência aos elementos da página
  const inFuncionario = document.getElementById("inFuncionario");
  const outEmail = document.getElementById("outEmail");

  // obtém conteúdo do campo de entrada
  let funcionario = inFuncionario.value;

  // se vazio ou se não há espaços no nome do funcionário
  if (funcionario == '' || funcionario.indexOf(' ') == -1) {
    alert('Informe o nome completo do funcionário...');
    inFuncionario.value = '';
    inFuncionario.focus();
    return;
  }

  // divide o nome em itens de vetor, criados a cada ocorrência do espaço
  let partes = funcionario.split(' ');
  let email = ''; // vai concatenar letras
  let tam = partes.length; // obtém n° itens do vetor partes

  // percorre os itens do vetor (exceto o último) ...
  for (i = 0; i < tam - 1; i++) {
    email += partes[i].charAt(0); // ... e obtém a letra inicial de cada item
  }

  // concatena as letras iniciais com a última parte (sobrenome) e empresa
  email += `${partes[tam - 1]}@empresa.com.br`;

  // exibe e-mail em letras minúsculas
  outEmail.textContent = `E-mail: ${email.toLowerCase()}`;
}

// cria referência ao botão e após associa function ao evento click
const btGerar = document.getElementById("btGerar");
btGerar.addEventListener('click', gerarEmail);