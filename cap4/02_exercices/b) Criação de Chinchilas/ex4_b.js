function chinchilasCreat() {
  // faz referência aos elementos usados na function
  const inNumber = document.getElementById("inNumber");
  const inYears = document.getElementById("inYears");
  const outResult = document.getElementById("outResult");

  // pega os conteúdos dos elementos
  let number = Number(inNumber.value);
  let years = Number(inYears.value);

  // faz a verificação se está correto os valores
  if (number < 2 || isNaN(number) || years == 0 || isNaN(years)) {
    alert('Informe os dados corretamente...');
    inNumber.value = '';
    inYears.value = '';
    inNumber.focus();
    return;
  }

  // criar a variável que vai concatenar o resultado e o contador contYears
  let contYears = 1;
  let result = `${contYears}° Ano: ${number} Chinchilas\n`;

  // faz um laço e soma mais 1 no ano e altera o n° de chinchilas
  for (let i = 1; i < years; i++) {
    contYears++;
    result = `${result}${contYears}° Ano: ${number *= 3} Chinchilas\n`;
  }

  // altera o valor do outResult e limpa as entradas
  outResult.textContent = `${result}\n`;
  inNumber.value = '';
  inYears.value = '';
  inNumber.focus();
}

// cria referência ao btnResult e aciona function com o click
const btnResult = document.getElementById("btnResult");
btnResult.addEventListener('click', chinchilasCreat);