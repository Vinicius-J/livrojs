function calcularPeso() {
  // criar referência aos elementos manipulados pela function
  const inNome = document.getElementById("inNome");
  const rbMasculino = document.getElementById("rbMasculino");
  const rbFeminino = document.getElementById("rbFeminino");
  const inAltura = document.getElementById("inAltura");
  const outResposta = document.getElementById("outResposta");

  // obtém o conteúdo dos campos de edição da página
  let nome = inNome.value;
  let masculino = rbMasculino.checked;
  let feminino = rbFeminino.checked;
  let altura = Number(inAltura.value);

  // verifica se o nome foi preenchido e sexo selecionado
  if (nome == "" || (masculino == false && feminino == false)) {
    alert('Por favor, informe o nome e selecione o sexo...');
    inNome.focus(); // posiciona (joga o foco) no campos de edição
  };

  // se altura vazio (0) ou NaN: Not-a-Number (um texto for informado, por exemplo)
  if (altura == 0 || isNaN(altura)) {
    alert('Por favor, informe a altura corretamente...');
    inAltura.focus();
  };

  // se masculino (significa se masculino == true)
  if (masculino) {
    let peso = 22 * Math.pow(altura, 2); // Math.pow eleva ao quadrado
    // apresenta a resposta (altera o conteúdo da linha outResposta)
    return outResposta.textContent = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`;
  } else {
    let peso = 21 * Math.pow(altura, 2);
    // apresenta a resposta (altera o conteúdo da linha outResposta)
    return outResposta.textContent = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`;
  };

}

// cria referência ao elemento btCalcular e registra evento associado a calcularPeso
const btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener('click', calcularPeso);

// function limparCampos() {
//   // limpa os conteúdos dos elementos
//   document.getElementById("inNome").value = "";
//   document.getElementById("rbMasculino").checked = false;
//   document.getElementById("rbFeminino").checked = false;
//   document.getElementById("inAltura").value = "";
//   document.getElementById("outResposta").textContent = "";

//   // posiciona (joga o foco) no elementos inNome
//   document.getElementById("inNome").focus();
// };

const btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener('click', limparCampos);

//! usando location.reload() -> para recarregar a página

function limparCampos() {
  // recarrega a página
  location.reload();
          
  // posiciona (jogo o foco) no elemento inNome
  document.getElementById("inNome").focus();
};