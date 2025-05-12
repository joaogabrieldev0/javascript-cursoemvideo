var agora = new Date();

// var mesAtual = (agora.getUTCMonth()) + 1;

// console.log(mesAtual)

var mesAtual = agora.getUTCMonth() + 1;

var mesText = "";

if (mesAtual == 1) {
  mesText = "Janeiro";
} else if (mesAtual == 2) {
  mesText = "Fevereiro";
} else if (mesAtual == 3) {
  mesText = "Março";
} else if (mesAtual == 4) {
  mesText = "Abril";
} else if (mesAtual == 5) {
  mesText = "Maio";
} else if (mesAtual == 6) {
  mesText = "Junho";
} else if (mesAtual == 7) {
  mesText = "Julho";
} else if (mesAtual == 8) {
  mesText = "Agosto";
} else if (mesAtual == 9) {
  mesText = "Setembro";
} else if (mesAtual == 10) {
  mesText = "Outubro";
} else if (mesAtual == 11) {
  mesText = "Novembro";
} else if (mesAtual == 12) {
  mesText = "Dezembro";
}

console.log(mesText);
