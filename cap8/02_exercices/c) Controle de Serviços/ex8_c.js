function addServices() {
  const inService = document.getElementById("inService");
  let services = inService.value;

  if (services == "") {
    alert("Preencha o campo de serviço.");
    inService.focus();
    return;
  }

  if (localStorage.getItem("listServices")) {
    let listServices = localStorage.getItem("listServices", services) + ";" + services;
    localStorage.setItem("listServices", listServices);
  } else {
    localStorage.setItem("listServices", services);
  }

  inService.value = '';
  inService.focus();

  addList();
}

const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", addServices);

function addList() {
  const outNumServices = document.getElementById("outNumServices");
  let numPendente;
  if (localStorage.getItem("listServices")) {
    numPendente = localStorage.getItem("listServices").split(";").length;
  } else {
    numPendente = 0;
  }

  outNumServices.textContent = numPendente;
}

addList();

function executeService() {
  const outServices = document.getElementById("outServices");

  if (!localStorage.getItem("listServices")) {
    alert("Não há mais serviços no momento.");
  }

  const services = localStorage.getItem("listServices").split(";");
  const excluido = services.shift();

  outServices.textContent = excluido;

  localStorage.setItem("listServices", services.join(";"));

  addList();
}

const btnExecut = document.getElementById("btnExecut");
btnExecut.addEventListener("click", executeService);