let numbers = []; // cria vetor global
const inNumber = document.getElementById("inNumber"); // referência inNumber
const outCheckOrder = document.getElementById("outCheckOrder"); // referência outCheckOrder

function addNumber() {
  let number = Number(inNumber.value); // pega conteúdo do inNumber

  if (number == 0 || isNaN(number)) { // verifica se é um número válido
    alert('Informe um número válido');
    inNumber.focus();
    return;
  }

  // verifica se o número já existe no vetor
  if (numbers.indexOf(number) >= 0) {
    alert(`Você já adicionou o número ${number}. Tente outro...`);
  } else {
    numbers.push(number); // adiciona o valor no vetor global
  }

  // altera o valor de outResult e adiciona os números
  document.getElementById("outResult").textContent = `Números: ${numbers.join(", ")}`;

  // limpa o conteúdo de inNumber e posiciona nele
  inNumber.value = '';
  inNumber.focus();
}

// referência o btnAdd e associa a function ao evento click
const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener('click', addNumber);

function checkOrder() {
  if (numbers.length == 0) { // verifica se o vetor está vazio
    alert('Não há números para verificar');
    inNumber.focus();
    return;
  }

  let copia = numbers.slice().sort(function (a, b) { return a - b });

  // verifica se os números estão em ordem crescente
  for (i = 0; i < numbers.length; i++) {
    if (copia[i] == numbers[i]) {
      outCheckOrder.textContent = `Os números estão em ordem crescente`;
    } else {
      outCheckOrder.textContent = `Atenção... Números não estão em ordem crescente`;
    }
  }
}

// referência o btnCheck e associa a function ao evento click
const btnCheck = document.getElementById("btnCheck");
btnCheck.addEventListener('click', checkOrder);

function attPage(){
  location.reload();
}

const btnAtt = document.getElementById("btnAtt");
btnAtt.addEventListener('click', attPage);