function mostrarTabuada() {
  // cria referência aos elementos da página
  const inNumero = document.getElementById("inNumero");
  const outTabuada = document.getElementById("outTabuada");

  // converte conteúdo do campo inNumero
  let numero = Number(inNumero.value);

  // valida o número
  if (numero == 0 || isNaN(numero)) {
    alert('Informe um número válido...');
    inNumero.focus();
    return;
  }

  // cria uma váriavel do tipo String, que irá concatenar a resposta
  let resposta = '';

  // cria um laço de repetição 
  for (let i = 1; i <= 10; i++){
    // a variável resposta vai acumulando os novos conteúdos
    resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
  }

  // o conteúdo da tag pre é alterado para exibir a tabuada do numero
  outTabuada.textContent = resposta;
}

// cria referência ai botão e após associa function ao evento click
const btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener('click', mostrarTabuada);