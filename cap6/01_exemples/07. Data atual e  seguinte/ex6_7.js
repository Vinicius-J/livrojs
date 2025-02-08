let hoje = new Date();
let amanha = new Date();

let dia = amanha.getDate();
amanha.setDate(dia + 1);

alert(`Hoje: ${hoje} \nAmanhã: ${amanha}`);