// declara e inicializa contadores e acumuladores (variáveis globais)
let numContas = 0;
let valTotal = 0;

// variável string que acumula as contas
let resposta = "";

function registraConta() {
  // cria referência aos elementos da página manipulados pela function
  const inDescricao = document.getElementById("inDescricao");
  const inValor = document.getElementById("inValor");
  const outListaContas = document.getElementById("outListaContas");
  const outTotal = document.getElementById("outTotal");

  // obtém conteúdo dos campos
  let descricao = inDescricao.value;
  let valor = Number(inValor.value);

  // verifica preenchimento dos campos
  if (descricao == "" || valor == 0 || isNaN(valTotal)) {
    alert("Informe os dados corretamente...");
    inDescricao.focus();
    return;
  }

  // adiciona valores ao contador e acumulador
  numContas++;
  valTotal = valTotal + valor;

  // concatena as contas
  resposta = `${resposta}${descricao} - R$: ${valor.toFixed(2)} \n`;

  // altera o conteúdo das tags resposta
  outListaContas.textContent = `${resposta}--------------------------------`;
  outTotal.textContent = `${numContas} Contas(s) - Total R$: ${valTotal.toFixed(2)}`;

  // limpa campos e posiciona cursor em inDescricao
  inDescricao.value = '';
  inValor.value = '';
  inDescricao.focus();
}

// referencia elemento e após associa function ao evento click
const btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener('click', registraConta);