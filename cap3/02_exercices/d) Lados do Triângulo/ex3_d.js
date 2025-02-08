function triangle() {
  // faz referência aos inputs da página
  const inSideA = document.getElementById("inSideA");
  const inSideB = document.getElementById("inSideB");
  const inSideC = document.getElementById("inSideC");
  const outResult = document.getElementById("outResult");
  const outTypeResult = document.getElementById("outTypeResult");

  // pega os valores dos inputs
  let sideA = Number(inSideA.value);
  let sideB = Number(inSideB.value);
  let sideC = Number(inSideC.value);

  // verifica se é o número 0 ou Not-a-Number (NaN)
  if (sideA == 0 || isNaN(sideA) || sideB == 0 || isNaN(sideB) || sideC == 0 || isNaN(sideC)) {
    alert('Informe os números corretamente.');
    inSideA.value = '';
    inSideB.value = '';
    inSideC.value = '';
    inSideA.focus();
    return;
  }

  // verifica se pode formar um triângulo
  if (sideA > (sideB + sideC) || sideB > (sideA + sideC) || sideC > (sideB + sideA)) {
    alert('Informe números diferentes para formar um triângulo possível');
    inSideA.value = '';
    inSideB.value = '';
    inSideC.value = '';
    inSideA.focus();
    return;
  }

  // declara uma variável mas não dá valor
  let typeTriangle;

  // verifica que tipo de triângulo é
  if (sideA == sideB && sideA == sideC) {
    typeTriangle = `Equilátero`;
  } else if ((sideA == sideB) || (sideA == sideC) || (sideB == sideC)) {
    typeTriangle = `Isósceles`;
  } else {
    typeTriangle = `Escaleno`;
  }

  // dá a resposta com base no tipo de triângulo
  outResult.textContent = `Lados podem formar um triângulo`;
  outTypeResult.textContent = `Tipo: ${typeTriangle}`;

}

// faz referência ao botão e designa uma função para o evento click
const btnToChecked = document.getElementById("btnToChecked");
btnToChecked.addEventListener('click', triangle);