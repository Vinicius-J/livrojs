let anoAtual = new Date().getFullYear();
let idade = prompt(`Quantos anos você comemora em ${anoAtual}?`);
let anoNasc = anoAtual - idade;
alert(`Ah... Então você nasceu em ${anoNasc}`);