const aumentaBTN = document.querySelector("#aumentar");
const resetaBTN = document.querySelector("#resetar");
const diminuiBTN = document.querySelector("#diminuir");
let numero = parseInt(document.querySelector("h1").innerText, 10);

function aumentaNumero() {
  numero += 1;
  document.querySelector("h1").innerText = numero;
}

function diminuiNumero() {
  numero -= 1;
  document.querySelector("h1").innerText = numero;
}

function zeraNumero() {
  numero -= numero;
  document.querySelector("h1").innerText = numero;
}

aumentaBTN.addEventListener("click", aumentaNumero);
diminuiBTN.addEventListener("click", diminuiNumero);
resetaBTN.addEventListener("click", zeraNumero);
