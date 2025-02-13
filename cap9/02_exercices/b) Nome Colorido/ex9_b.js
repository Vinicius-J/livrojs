const frm = document.querySelector("form");
const outName = document.querySelector("#outName");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value.trim();

  if (nome == "" || nome.indexOf(" ") == -1) {
    alert("Informe o nome corretamente");
    frm.inNome.value = '';
    frm.inNome.focus();
    return;
  }
  const partes = nome.split(" ");

  const listaH3 = document.querySelectorAll("h3")
  for (let i = listaH3.length - 1; i >= 0; i--) {
    outName.removeChild(listaH3[i]);
  }

  const colors = ["blue", "red", "yellow", "green", "orange", "chocolate", "deeppink", "purple", "violet", "aquamarine"];

  for (const parte of partes) {
    let h3 = document.createElement("h3");
    let texto = document.createTextNode(parte);
    h3.appendChild(texto);
    let randColor = Math.floor(Math.random() * 10);
    h3.style.color = colors[randColor];
    outName.appendChild(h3);
  }
});

