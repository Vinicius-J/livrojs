let notices = []; // vetor das noticias
const inNotice = document.getElementById("inNotice"); // referencia o elemento inNotice
const outNotices = document.getElementById("outNotices"); // referencia o elemento outNotices
const outList = document.getElementById("outList"); // referencia o elemento outList

function addNotices() {
  // pega o conteúdo do inNotice
  let noticesAdd = inNotice.value;

  // verifica se está correto o conteúdo
  if (noticesAdd == '') {
    alert('Informe a notícia corretamente');
    inNotice.focus();
    return;
  }

  // adiciona as notícias no vetor
  notices.push(noticesAdd);

  let list = '';

  for (i = 0; i < notices.length; i++) {
    list = `Notícias Cadastradas: ${notices.length}`;
  }

  // reseta valor do inNotice e foca nele
  inNotice.value = '';
  inNotice.focus();

  outNotices.textContent = list;
}

// cria referêcia ao btnAdd e associa function ao click
const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener('click', addNotices);

function createList() {
  // verifica se há itens na lista
  if (notices.length == 0) {
    alert('Não há notícias para mostrar');
    inNotice.focus();
    return;
  }

  // quantas notícias irá mostrar
  const numNotices = Number(prompt('Quantas notícias quer ver?'));

  // verifica se há a quantidade informada
  if (notices.length < numNotices) {
    alert('Não há essa quantidade de notícias');
    inNotice.focus();
    return;
  }

  // concatena e cria uma copia inversa de notices
  let list = `${numNotices} Últimas Notícias\n----------------------------------------------------------------\n`;
  let copia = notices.slice().reverse();


  // adiciona o número de notícias que quer ver
  for (i = 0; i < numNotices; i++) {
    list += `${i + 1}°) ${copia[i]}\n`;
  }

  // altera o conteúdo de outList
  outList.textContent = list;
}

// cria referêcia ao btnList e associa function ao click
const btnList = document.getElementById("btnList");
btnList.addEventListener('click', createList); 