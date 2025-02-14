const frm = document.querySelector("form");
const dvJogos = document.querySelector("#dvJogos");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  let clube = frm.inClube.value;
  let h5 = document.createElement("h5");
  h5.className = " aDireita me-2"
  let texto = document.createTextNode(clube);

  h5.appendChild(texto);
  dvJogos.appendChild(h5);

  frm.inClube.value = '';
  frm.inClube.focus();
});


frm.btnMontar.addEventListener('click', () => {
  const allH5 = dvJogos.querySelectorAll("h5");

  if (allH5.length % 2 != 0 || allH5.length == 0) {
    alert("O número de clubes inseridos deve ser par");
    frm.inClube.focus();
    return;
  }

  const newH3 = document.createElement("h3");
  const texto = document.createTextNode("Tabela de Jogos");
  newH3.appendChild(texto);
  dvJogos.appendChild(newH3);

  const novaTable = document.createElement("table");
  novaTable.className = "table table-striped";
  dvJogos.appendChild(novaTable);

  let linha;
  for (i = 0; i < allH5.length; i++) {
    if (i % 2 == 0) {
      linha = novaTable.insertRow(-1)
      const col1 = linha.insertCell(0)
      col1.textContent = allH5[i].innerText
    } else {
      const col2 = linha.insertCell(1)
      col2.textContent = allH5[i].innerText
    }
  }
  frm.btnAdd.disabled = true;
  frm.btnMontar.disabled = true;
});

frm.addEventListener('reset', () => {
  location.reload();
});