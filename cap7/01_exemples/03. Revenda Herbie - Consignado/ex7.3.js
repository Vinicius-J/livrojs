function mostrarDados() {
  // cria referência aos elementos da página
  const inModelo = document.getElementById("inModelo");
  const inAno = document.getElementById("inAno");
  const inPreco = document.getElementById("inPreco");
  const outClassif = document.getElementById("outClassif");
  const outPrecoVenda = document.getElementById("outPrecoVenda");

  // obtém o conteúdo dos campos de entrada de dados
  let modelo = inModelo.value;
  let ano = Number(inAno.value);
  let preco = Number(inPreco.value);

  // valida o preenchimento dos campos
  if (modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)) {
    alert("Informe corretamente os dados do veículo");
    inModelo.focus();
    return;
  }

  // chama e atribui o retorno das funções às variáveis
  let classificacao = classificarVeiculo(ano);
  let precoVenda = calcularVenda(preco, classificacao);

  // exibe as respostas
  outClassif.textContent = `${modelo} - ${classificacao}`;
  outPrecoVenda.textContent = `Preço de Venda R$: ${precoVenda.toFixed(2)}`;
}

// cria referência ao botão e associa ao evento click a função
const btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener('click', mostrarDados);

// função que recebe o ano do veículo como parâmetro
function classificarVeiculo(ano) {
  let anoAtual = new Date().getFullYear(); // obtém o ano atual
  let classif;

  // condições para definir a classificação do veículo
  if (ano == anoAtual) {
    classif = "Novo";
  } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
    classif = "Seminovo";
  } else {
    classif = "Usado";
  }

  return classif; // retorna a classificação
}

// função recebe valor e status do veículo como parâmetro
function calcularVenda(valor, status){
  let prVenda = (status == "Novo") ? valor * 1.08 : valor * 1.10;
  return prVenda;
}