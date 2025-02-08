function repeatFruit(){
  // faz referência aos elementos utilizados na function
  const inFruit = document.getElementById("inFruit");
  const inNumber= document.getElementById("inNumber");
  const outResult = document.getElementById("outResult");

  // pega o conteúdo dos inputs
  let fruta = inFruit.value;
  let number = Number(inNumber.value);

  // verifica se foi preenchido corretamente
  if(fruta == "" || number == 0 || isNaN(number)){
    alert('Informe os dados corretamente...');
    inFruit.value = '';
    inNumber.value = '';
    inFruit.focus();
    return;
  }

  // cria a variável que irá concatenar o resultado
  let result = "";

  // loop que confere o número e quantas vezes repete
  for(let i = 1; i <= number; i++){
    if(i % number !== 0){
      result = `${result}${fruta}*`;
    } else{
      result = `${result}${fruta}`;
    }
  }

  // altera o conteúdo do outResult
  outResult.textContent = result;
  inFruit.value = '';
  inNumber.value = '';
  inFruit.focus();
}

const btnRepeat = document.getElementById("btnRepeat");
btnRepeat.addEventListener("click", repeatFruit);