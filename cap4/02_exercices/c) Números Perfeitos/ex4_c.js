function perfectNumber() {
  // faz referência ao elementos usados na function
  const inNumber = document.getElementById("inNumber");
  const outSum = document.getElementById("outSum");
  const outResult = document.getElementById("outResult");

  // pega o conteúdo de inNumber
  let number = Number(inNumber.value);

  // verifica se é um número válido
  if (number == 0 || isNaN(number)) {
    alert('Informe um número válido...');
    inNumber.value = '';
    inNumber.focus();
    return;
  }

  // cria as variáveis que vão concatenar e já declara o valor 1 por ser padrão
  let contDiv = `Divisores do ${number}: 1`;
  let totalDiv = 1;

  // cria o loop para verificar os divisores
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      contDiv += `, ${i}`;
      totalDiv += i;
    }
  }

  // concatena os divisores com a soma deles
  contDiv += `. (Soma ${totalDiv})`;

  // verifica se o número é perfeito ou não e manda a resposta
  if (number == totalDiv) {
    outResult.textContent = `${number} É um Número Perfeito`
  } else {
    outResult.textContent = `${number} Não é um Número Perfeito`
  }

  // altera o content do outSum para a variável concatenada dos divisores e soma
  outSum.textContent = contDiv;
  inNumber.value = '';
  inNumber.focus();
}

// faz referência ao btnResult e aciona function com o click
const btnResult = document.getElementById("btnResult");
btnResult.addEventListener('click', perfectNumber);