function exibirMoedas() {
  // gera números aleatórios, entre 1 e 5, para cada moeda
  let num1_00 = Math.ceil(Math.random() * 5);
  let num0_50 = Math.ceil(Math.random() * 5);
  let num0_25 = Math.ceil(Math.random() * 5);
  let num0_10 = Math.ceil(Math.random() * 5);
  // cria referência ao local onde as imagens serão inseridas
  const divMoedas = document.getElementById("divMoedas");

  // texto alternativo das imagens (para questão de acessibilidade)
  let alt1_00 = "Moedas de um real";
  let alt0_50 = "Moedas de Cinquenta Centavos";
  let alt0_25 = "Moedas de Vinte e Cinco Centavos";
  let alt0_10 = "Moedas de Dez Centavos";

  // chama o método criarMoedas passando argumentos
  criarMoedas(num1_00, divMoedas, "1_00.jpg", alt1_00, "moeda1_00");
  criarMoedas(num0_50, divMoedas, "0_50.jpg", alt0_50, "moeda0_50");
  criarMoedas(num0_25, divMoedas, "0_25.jpg", alt0_25, "moeda0_25");
  criarMoedas(num0_10, divMoedas, "0_10.jpg", alt0_10, "moeda0_10");
}
exibirMoedas(); // chama o método exibirMoedas

function criarMoedas(num, pai, moeda, textoAlt, classe) {
  // cria laço de repetição para inserir várias imagens de moedas na página
  for (i = 0; i <= num; i++) {
    let novaMoeda = document.createElement("img"); // cria elemento img
    novaMoeda.src = moeda; // atributo src
    novaMoeda.textoAlt = textoAlt; // texto alternativo
    novaMoeda.className = classe; // classe da moeda (CSS)
    pai.appendChild(novaMoeda); // hierarquia DOM
  }
  let br = document.createElement("br"); // cria uma quebra de linha (br)
  pai.appendChild(br);
}

function conferirSoma() {
  // cria referência ao campo de entrada e obtém o seu conteúdo
  const inSoma = document.getElementById("inSoma");
  let soma = Number(inSoma.value);

  // valida o preenchimento do campo
  if (soma == 0 || isNaN(soma)) {
    alert("Informe o valor da soma (use ponto para separar decimais)");
    inSoma.focus();
    return;
  }

  // captura divMoedas que é o local onde as moedas foram inseridas
  const divMoedas = document.getElementById("divMoedas");
  // captura as tagas img filhas de divMoedas
  let moedas = divMoedas.getElementsByTagName("img");

  let totalMoedas = 0; // declara e inicializa acumulador

  // percorre as tags img e verifica propriedade className
  for (i = 0; i < moedas.length; i++) {
    if (moedas[i].className == "moeda1_00") {
      totalMoedas += 1; // acumula 1 (para moedas de 1)
    } else if (moedas[i].className == "moeda0_50") {
      totalMoedas += 0.50; // acumula 0.50 (para moedas de 0.50)
    } else if (moedas[i].className == "moeda0_25") {
      totalMoedas += 0.25; // acumula 0.25 (para moedas de 0.25)
    } else {
      totalMoedas += 0.10; // acumula 0.10 (para moedas de 0.10)
    }
  }

  let mensagem = "";

  let div = document.createElement("div"); // cria elemento div
  let h3 = document.createElement("h3"); // cria elemento h3

  // verifica se o valor informado é igual ao total de Moedas exibido
  if (soma == totalMoedas.toFixed(2)) {
    div.className = "alert alert-success"; // define classe da div
    mensagem += "Parabéns!! Você acertou!"; // e mensagem a ser exibida
  } else {
    div.className = "alert alert-danger";
    mensagem += `Ops... A resposta correta é ${totalMoedas.toFixed(2)}`;
  }

  let texto = document.createTextNode(mensagem); // cria elemento de texto
  h3.appendChild(texto); // texto é filho de h3
  div.appendChild(h3); // h3 é filho de div
  divMoedas.appendChild(div); // div e filha de divMoedas

  btConferir.disabled = true; // desabilita botão (resposta já foi exibida)
}

const btConferir = document.getElementById("btConferir");
btConferir.addEventListener("click", conferirSoma);

const btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", function () {
  location.reload();
});

