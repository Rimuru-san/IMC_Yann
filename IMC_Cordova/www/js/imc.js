var height = localStorage.getItem("height");
var weight = localStorage.getItem("weight");

var title = document.getElementById('title-imc');
var box_imc = document.getElementById('imc-value');
var register_imc = document.getElementById('register-imc');
var update_imc = document.getElementById('update-imc');

var fullname = localStorage.getItem("name");
var fistname = fullname.split(' ')[0];
title.append("Olá " +  fistname  + " IMC Atual");

if (height != "" && weight != "") {
  var imc = weight/(height * height);
  box_imc.append(imc.toFixed(2));
  update_imc.append("Atualizar Altura e Peso");
} else {
  register_imc.append("Gravar Altura e Peso");
}
