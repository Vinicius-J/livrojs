function verificarPrimo() {
  // cria referência aos elementos da página
  const inNumero = document.getElementById("inNumero");
  const outResposta = document.getElementById("outResposta");

  // obtém o número informado
  let num = Number(inNumero.value);

  // verifica se preencheu corretamente o campo inNúmero
  if (num == 0 || isNaN(num)) {
    alert('Número Inválido...');
    return;
  }

  // declara e inicializa contador
  // let numDivisores = 0;

  // percorre todos os possíveis divisores do número
  //   for (let i = 1; i <= num; i++){
  //     // verifica se i (1, 2, 3...) é divisor do num
  //     if(num % i == 0){
  //       numDivisores++; // se é, incrementa contador
  //     }
  //   }

  //   // se possui apenas 2 divisores, é primo
  //   if(numDivisores == 2){
  //     outResposta.textContent = `${num} É primo`;
  //   } else {
  //     outResposta.textContent = `${num} Não é primo`;
  //   }

  let temDivisor = 0;

  // percorre os possíveis divisores do num
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      temDivisor = 1; // muda o flag
      break; // sai da repetição
    }
  }

  // se num > 1 e não possui divisor
  if (num > 1 && !temDivisor){
    outResposta.textContent = `${num} É primo`;
  } else{
    outResposta.textContent = `${num} Não é primo`;
  }
}

// referencia elemento e após associa function ao evento click
const btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener('click', verificarPrimo);