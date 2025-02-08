const btnCategory = document.getElementById("btnCategory");
btnCategory.addEventListener('click', () => {
  const inName = document.getElementById("inName");
  const inAge = document.getElementById("inAge");
  const outResult = document.getElementById("outResult");

  let name = inName.value;
  let age = Number(inAge.value);

  if (name == '' || age == 0 || isNaN(age) || name.indexOf(" ") == -1) {
    alert("Informe o nome completo e idade do aluno.");
    inName.value = '';
    inAge.value = '';
    inName.focus();
    return;
  }

  let nameTraced = retornaTracos(name);
  let category = categorizarAluno(age);

  let result = "";

  result += `${name}\n${nameTraced}\nCategoria: ${category}`;

  outResult.textContent = result;

  inName.value = '';
  inAge.value = '';
  inName.focus();
});

function categorizarAluno(age) {
  let category;
  if (age > 18) {
    category = "Adulto";
  } else if (age >= 13) {
    category = "Juvenil";
  } else {
    category = "Infantil";
  }
  return category;
}

function retornaTracos(name){
  let nameTraceded = "";
  let tam = name.length;
  for(i = 0; i < tam; i++){
    if(name.charAt(i) == " "){
      nameTraceded += " ";
    } else{
      nameTraceded += "-";
    }
  }
  
  return nameTraceded;
}
