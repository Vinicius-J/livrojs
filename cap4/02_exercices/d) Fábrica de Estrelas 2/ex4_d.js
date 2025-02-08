function createStars(){
  // faz referência aos elementos usados na function
  const inNumber = document.getElementById("inNumber");
  const outStars = document.getElementById("outStars");

  // pega o conteúdo do inNumber
  let number = Number(inNumber.value);

  // verifica se o número é válido
  if(number == 0 || isNaN(number)){
    alert('Informe um número válido...');
    inNumber.value = '';
    inNumber.focus();
    return;
  }

  // cria a variável que vai concatenar as estrelas
  let stars = '';

  // cria o loop para formar a estrela com base no number
  for(let i = 1; i <= number; i++){
    // cria outro loop para adicionar estrelas
    for(let s = 1; s <= i; s++){
      stars += '*';
    }
    // adiciona a quebra de linha
    stars += '\n'
  }

  // altera o valor de outStars para criar a stars
  outStars.textContent = stars;
  inNumber.value = '';
  inNumber.focus();
}

// faz referência ao btnCreateStars e associa a function pelo click
const btnCreateStars = document.getElementById("btnCreateStars");
btnCreateStars.addEventListener("click", createStars);