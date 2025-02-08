function checkePalindromo() {
  // referência aos elementos usados na function
  const inFrase = document.getElementById("inFrase");
  const outResult = document.getElementById("outResult");

  // pega o valor do inFrase e coloca tudo em maísculo
  let frase = inFrase.value.toUpperCase();

  // verifica se a frase não está vazia
  if (frase == "") {
    alert("Preencha o campo corretamente");
    inFrase.focus();
    return;
  }

  let result = `${frase} `; // vai concatenar o resultado com a frase no início
  let frase2 = frase.replace(/ /g, ""); // troca todos os espaços por nada
  let tam = frase2.length; // pega o tamanho da frase
  let reverseFrase = ""; // concatena a frase reversa

  for (i = tam; i >= 0; i--) { // percorre e concatena a frase ao inverso
    reverseFrase += frase2.charAt(i);
  }

  if (frase2 == reverseFrase) { // faz a comparação se as frases são iguais
    result += `é um Palíndromo`;
  } else {
    result += `não é um Palíndromo`;
  }

  // altera o valor de outResult, reseta a inFrase e coloca foco
  outResult.textContent = result;
  inFrase.value = "";
  inFrase.focus();

}

// referência ao botão e associa a function ao evento click
const btnCheck = document.getElementById("btnCheck");
btnCheck.addEventListener('click', checkePalindromo);