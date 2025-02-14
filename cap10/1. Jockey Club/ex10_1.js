// constante com nomes dos cavalos participantes do páreo
const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

// vetor que irá armazenar um objeto aposta (com n° cavalo e valor da aposta)
let apostas = [];

function adicionarAposta() {
  // cria referência aos elementos inValor e outApostas
  // (inCavalo é referência em variável global na sequência do programa)
  const inValor = document.getElementById("inValor");
  const outApostas = document.getElementById("outApostas");

  // obtém o n° do cavalo e valor da aposta
  let cavalo = Number(inCavalo.value);
  let valor = Number(inValor.value);

  // valida os dados 
  if (isNaN(cavalo) || isNaN(valor) || valor == 0 || !validarCavalo(cavalo)) {
    alert("Aposta Inválida");
    inCavalo.focus();
    return;
  }

  // adiciona ao vetor de objetos (atributos cavalo e valor)
  apostas.push({ cavalo: cavalo, valor: valor });
  // variável para exibir a lista das apostas realizadas
  let lista = "Apostas Realizada\n-------------------------------------------\n";

  // percorre o vetor e concatena em lista as apostas realizadas
  for (i = 0; i < apostas.length; i++) {
    lista += `N° ${apostas[i].cavalo} ${obterCavalo(apostas[i].cavalo)}`;
    lista += ` - R$: ${apostas[i].valor.toFixed(2)}\n`;
  }
  outApostas.textContent = lista; // exibe a lista das apostas

  inCavalo.value = ""; // limpa os campos de entrada
  inValor.value = "";
  inCavalo.focus(); // posiciona o cursor em inCavalo
}

// cria referência ao botão e associa ao evento click a função indicada
const btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", adicionarAposta);

function validarCavalo(num) {
  let tam = CAVALOS.length; // obtém n° de cavalos da const CAVALOS
  // verifica se o número do cavalo (passado como argumento) é válido
  if (num >= 1 && num <= tam) {
    return true;
  } else {
    return false;
  }
}

function mostrarCavalo() {
  // cria referência ao elemento outCavalo (para exibir dados do cavalo)
  const outCavalo = document.getElementById("outCavalo");

  // se não preencheu o campo, limpa outCavalo e retorna
  // (não exibe mensagem de alerta, pois pode sair por um clique em Ganhador)
  if (inCavalo.value == "") {
    outCavalo.textContent = "";
    return;
  }
  // obtém o conteúdo do campo de entrada
  let cavalo = Number(inCavalo.value);

  // valida (se número do cavalo for preenchido)
  if (isNaN(cavalo) || !validarCavalo(cavalo)) {
    outCavalo.textContent = "Número do Cavalo Inválido";
    return;
  }

  // cria variáveis com retorno dos métodos a serem exibidos em outCavalo
  let nomeCavalo = obterCavalo(cavalo);
  let numApostas = contarApostas(cavalo);
  let total = totalizarApostas(cavalo);

  // exibe nome, n° de apostas e total apostado no cavalo
  outCavalo.textContent = `${nomeCavalo} (Apostas: ${numApostas}`;
  outCavalo.textContent += ` - R$: ${total.toFixed(2)})`;
}

// cria referência ao botão e associa ao evento blur a função indicada
const inCavalo = document.getElementById("inCavalo");
inCavalo.addEventListener("blur", mostrarCavalo);

function obterCavalo(num) {
  let posicao = num - 1; // posição no vetor (subtrai 1, pois inicia em 0)
  return CAVALOS[posicao]; // nome do cavalo (da const CAVALOS)
}

function contarApostas(numCavalo) {
  let contador = 0;
  // percorre o vetor apostas
  for (i = 0; i < apostas.length; i++) {
    // verifica se aposta é no cavalo passado como argumento
    if (apostas[i].cavalo == numCavalo) {
      contador++; // conta +1 quando a aposta for no cavalo do argumento
    }
  }
  return contador; // retorna o n° de apostas no cavalo numCavalo
}

function totalizarApostas(numCavalo) {
  let total = 0;
  for (i = 0; i < apostas.length; i++) {
    if (apostas[i].cavalo == numCavalo) {
      total += apostas[i].valor; // soma o valor das apostas
    }
  }
  return total; // retorna a soma dos valores apostados em numCavalo
}

// quando o campo recebe o foco, limpa o conteúdo e dados do cavalo
inCavalo.addEventListener("focus", () => {
  inCavalo.value = "";
  document.getElementById("outCavalo").textContent = "";
});

function ganhadorPareo() {
  // solicita o número do cavalo ganhador (já converte para número)
  let ganhador = Number(prompt("N° do Cavalo Ganhador: "));

  // para validar o preenchimento do prompt anterior
  if (isNaN(ganhador) || !validarCavalo(ganhador)) {
    alert("Cavalo Inǘalido");
    return;
  }

  // cria referência ao elemento outApostas (onde será exibido o resumo)
  const outApostas = document.getElementById("outApostas");

  // concatena em resumo o resultado a ser exibido no elemento outApostas
  let resumo = "Resultado Final do Páreo\n";
  resumo += "--------------------------------------\n";
  resumo += `N° Total de Apostas: ${apostas.length}\n`;
  resumo += `Total Geral R$: ${totalizarGeral().toFixed(2)}\n\n`;
  resumo += `Ganhador N° ${ganhador} - ${obterCavalo(ganhador)}\n`;
  resumo += "--------------------------------------\n";
  resumo += `N° de Apostas: ${contarApostas(ganhador)}\n`;
  resumo += `Total Apostado: ${totalizarApostas(ganhador).toFixed(2)}`;

  outApostas.textContent = resumo; // exibe o resultado

  btApostar.disabled = true; // desabilita os botões apostar e ganhador
  btGanhador.disabled = true;
  btNovo.focus(); // joga foco no botão "Novo Páreo"
}
// cria referência ao botão e associa ao evento click a função indicada
const btGanhador = document.getElementById("btGanhador");
btGanhador.addEventListener("click", ganhadorPareo);

function totalizarGeral() {
  let total = 0;
  // percorre o vetor para somar o total das apostas
  for (i = 0; i < apostas.length; i++) {
    total += total + apostas[i].valor;
  }
  return total; // retorna o total das apostas
}

// cria referência ao btNOvo e cria função anônima associada ao evento click
const btNovo = document.getElementById("btNovo");
btNovo.addEventListener("click", () => {
  location.reload(); // recarrega a página
});
