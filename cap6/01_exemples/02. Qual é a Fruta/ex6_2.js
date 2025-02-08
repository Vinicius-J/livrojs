function montarDica() {
  // cria referência aos elementos da página
  const inFruta = document.getElementById("inFruta");
  const outDica = document.getElementById("outDica");

  // obtém conteúdo do campo de entrada
  let fruta = inFruta.value.toUpperCase();
  // se vazio, exibe alerta, posiciona em inFruta e retorna
  if (fruta == '') {
    alert('Informe a fruta...');
    inFruta.focus();
    return;
  }

  let resposta = fruta.charAt(0); // letra inicial da fruta
  let estrelas = '*'; // vai concatenar *
  let tam = fruta.length; // obtém tamanho da fruta

  // percorre os demais caracteres da fruta
  for (i = 1; i < tam; i++){
    // se a letra da posição da variável de controle  for igual à primeira...
    if(fruta.charAt(i) == fruta.charAt(0)){
      resposta += fruta.charAt(0); // adiciona a letra inicial
    } else { // senão
      resposta += "_"; // adiciona o sublinhado
    }
    estrelas += "*"; // concatena *
  }

  // exibe a resposta e exibe estrelas (*) em inFruta
  outDica.textContent = resposta;
  inFruta.value = estrelas;
}

// cria referência ao botão e após associa function ao evento click
const btMontar = document.getElementById("btMontar");
btMontar.addEventListener('click', montarDica);