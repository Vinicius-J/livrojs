const TAXA_MULTA = 2 / 100; // multa por atraso
const TAXA_JUROS = 0.33 / 100; // juros por dia de atraso

function calcularMultaJuros() {
  // cria referência aos elementos da página
  let inDateVenc = document.getElementById("inDateVenc");
  let inValor = document.getElementById("inValor");
  let outMulta = document.getElementById("outMulta");
  let outJuros = document.getElementById("outJuros");
  let outTotal = document.getElementById("outTotal");

  // obtém os conteúdos dos campos de entrada
  let dataVenc = inDateVenc.value;
  let valor = Number(inValor.value);

  // valida o preenchimento dos campos
  if (dataVenc == '' || valor == 0 || isNaN(valor)) {
    alert('Informe corretamente os dados da conta...');
    inDateVenc.focus();
    return;
  }

  // cria duas variáveis (instancias dois objetos) tipo data
  let hoje = new Date();
  let vencto = new Date();

  // a data vem no formato aaaa-mm-dd
  let partes = dataVenc.split("-");
  vencto.setDate(Number(partes[2]));
  vencto.setMonth(Number(partes[1]) - 1);
  vencto.setFullYear(Number(partes[0]));

  // calcula a diferença de dias entre as datas (em milissegundos)
  let atraso = hoje - vencto;

  let multa = 0; // inicializa multa e juros com 0
  let juros = 0;

  // se conta estiver em atraso
  if (atraso > 0) {
    // converte os milissegundos da diferença em dias
    // (1 dia = 24hor x 60min x 60seg x 1000seg: 86400000)
    // round(): necessário para períodos envolvendo horário de verão
    let dias = Math.round(atraso / 86400000);

    multa = valor * TAXA_MULTA; // calcula multa e juros
    juros = (valor * TAXA_JUROS) * dias;
  }

  let total = valor + multa + juros; // calcula o total

  outMulta.value = multa.toFixed(2); // exibe os valores com 2 decimais
  outJuros.value = juros.toFixed(2);
  outTotal.value = total.toFixed(2);
}

// cria referência ao botão e após associa function ao evento click
const btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener('click', calcularMultaJuros);

function limparCampos(){
  location.reload();
}

const btNovaConta = document.getElementById("btNovaConta");
btNovaConta.addEventListener('click', limparCampos);