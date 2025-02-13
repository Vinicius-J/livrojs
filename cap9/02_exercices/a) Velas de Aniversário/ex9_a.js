function exibirVelas() {
  const inIdade = document.getElementById("inIdade");
  const divVelas = document.getElementById("divVelas");

  let idade = Number(inIdade.value);

  if (idade == 0 || isNaN(idade) || idade > 120) {
    alert("Informe a idade corretamente");
    inIdade.value = "";
    inIdade.focus();
    return;
  }
  createImg(idade, divVelas);
}

const btnExibir = document.getElementById("btnExibir");
btnExibir.addEventListener("click", exibirVelas);

const createImg = (idade) => {
  let strIdade = idade.toString();
  for (let num of strIdade) {
    let novaVela = document.createElement("img");
    const div = document.createElement("div");
    novaVela.src = `${num}.png`;
    novaVela.alt = `Número ${num}`;
    novaVela.className = novaVela;
    divVelas.appendChild(novaVela);
  }
  btnExibir.disabled = true;
}

const btnNovasVelas = document.getElementById("btnNovasVelas");
btnNovasVelas.addEventListener("click", () => {
  location.reload();
});