let carros = [];

function adicionarCarros() {
  // cria referência aos elementos contendo os dados de entrada
  const inModelo = document.getElementById("inModelo");
  const inPreco = document.getElementById("inPreco");

  let modelo = inModelo.value;
  let preco = Number(inPreco.value);

  // verifica preenchimento dos campos
  if (modelo == '' || preco == 0 || isNaN(preco)) {
    alert('Informe corretamente os dados');
    inModelo.value = '';
    inModelo.focus();
    return;
  }

  // adiciona dados ao vetor de objetos
  carros.push({ modelo: modelo, preco: preco });

  // limpa campos e posiciona cursor em inModelo
  inModelo.value = '';
  inPreco.value = '';
  inModelo.focus();

  listarCarros(); // chama function que lista os carros
}

// cria referência ao btAdicionar e associa function ao evento click
const btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarCarros);

function listarCarros() {
  // verifica se vetor está vazio
  if (carros.length == 0) {
    alert('Não há carros na lista');
    return;
  }

  let lista = ''; // para concatenar lista de carros

  // percorre os elementos do vetor
  for (i = 0; i < carros.length; i++) {
    // adiciona à lista, cada objeto do vetor
    lista += `${carros[i].modelo} - R$: ${carros[i].preco.toFixed(2)} \n`
  }

  // referencia elemento e atera conteúdo exibido
  document.getElementById("outLista").textContent = lista;
}

const btListar = document.getElementById("btListar");
btListar.addEventListener('click', listarCarros);

function filtrarCarros() {
  // faz a leitura do valor máximo a partir do método prompt
  let maximo = Number(prompt('Qual o valor máximo que o cliente deseja pagar?'));

  // se não preencheu ou conteúdo inválido ...
  if (maximo == 0 || isNaN(maximo)) {
    return; // ... retorna
  }

  // para concatenar lista de carros que obedecem ao critério de pesquisa / filtro
  let lista = '';

  // percorre todos os elementos do vetor
  for (i = 0; i < carros.length; i++) {
    // verifica se o preço é inferior (ou igual) ao máximo
    if (carros[i].preco <= maximo) {
      lista += `${carros[i].modelo} - R$: ${carros[i].preco.toFixed(2)} \n`
    }
  }

  // cria referência a outLista
  let outLista = document.getElementById('outLista');

  // se a lista esta vazia, significa que nenhum veículo foi encontrado (no for)
  if (lista == '') {
    outLista.textContent = `Não há carros com preço até R$ ${maximo.toFixed(2)}`;
  } else {
    // senão, mostra os veículos obtidos
    outLista.textContent = `Carros até R$ ${maximo.toFixed(2)}\n------------------------\n${lista}`;
  }
}

const btFiltrar = document.getElementById('btFiltrar');
btFiltrar.addEventListener('click', filtrarCarros);

