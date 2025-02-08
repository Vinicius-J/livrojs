function preencherEstrelas() {
  // cria referência aos elementos html manipulados pela function
  const inNumero = document.getElementById("inNumero");
  const outEspacos = document.getElementById("outEspacos");

  // obtém conteúdo do campo
  let num = Number(inNumero.value);

  // verifica se é válido inNumero
  if (num == 0 || isNaN(num)) {
    alert('Número Inválido...');
    inNumero.focus();
    return;
  }

  // declara variável que irá concatenar as estralas/traços
  let estrelas = '';

  // cria um laço de repetição de 1 até o número informado
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      // na posição ímpar do i: *
      estrelas = `${estrelas}*`;
    } else {
      // na posição par do i: -
      estrelas = `${estrelas}-`;
    }
  }

  // exive as estrelas
  outEspacos.textContent = estrelas;
}

// cria referência ao botão e após associa function ao evento click
const btPreencher = document.getElementById("btPreencher");
btPreencher.addEventListener('click', preencherEstrelas);