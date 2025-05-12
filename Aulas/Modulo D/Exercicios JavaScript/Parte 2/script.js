function verificar() {
  // Definições do Sistema
  var agora = new Date();

  var anoAtual = 2025;

  var mesAtual = agora.getUTCMonth() + 1;

  // Dados do Usuario
  var anoNasc = document.getElementById("anoTXT");

  var mesNasc = document.getElementById("mesTXT");

  var mesNumb = Number(mesNasc.value);

  var radsex = document.getElementsByName("radio-sexo");

  // Tratamento dos Dados (Resultado)

  var resultado = document.getElementById("p-resultado");
  var img = document.getElementById("img-resultado");
  var corpoDoc = document.getElementById("body-main");
  var genero = "";

  // Definições do Sistema

  // Definições de Erro
  if (anoNasc.value > anoAtual || anoNasc.value.length == 0) {
    anoAtual = null;
    mesAtual = null;
    genero = "";
    window.alert("[ERRO] Informe um ano válido!");
    resultado.innerText = "";
    resultado.style.display = "none";
  } else if (mesNasc.value > 12 || mesNasc.value.length == 0) {
    anoAtual = null;
    mesAtual = null;
    genero = "";
    window.alert("[ERRO] Informe um Mês Valido");
    resultado.innerHTML = "";
    resultado.style.display = "none";
  } else if (
    radsex[0].checked == false &&
    radsex[1].checked == false &&
    radsex[2].checked == false
  ) {
    anoAtual = null;
    mesAtual = null;
    genero = "";
    window.alert("[ERRO] Por favor,Informe um gênero!");
    resultado.innerHTML = "";
    resultado.style.display = "none";
  }

  // Definições das Condições
  else if (radsex[0].checked == true) {
    genero = "Homem";

    corpoDoc.style.backgroundColor = "#BFD7FF";

    var mesRes = Number(mesAtual) - Number(mesNasc.value);

    var idadeRes = Number(anoAtual) - Number(anoNasc.value);

    var mesText = "";

    if (mesNumb == 1) {
      mesText = "Janeiro";
    } else if (mesNumb == 2) {
      mesText = "Fevereiro";
    } else if (mesNumb == 3) {
      mesText = "Março";
    } else if (mesNumb == 4) {
      mesText = "Abril";
    } else if (mesNumb == 5) {
      mesText = "Maio";
    } else if (mesNumb == 6) {
      mesText = "Junho";
    } else if (mesNumb == 7) {
      mesText = "Julho";
    } else if (mesNumb == 8) {
      mesText = "Agosto";
    } else if (mesNumb == 9) {
      mesText = "Setembro";
    } else if (mesNumb == 10) {
      mesText = "Outubro";
    } else if (mesNumb == 11) {
      mesText = "Novembro";
    } else if (mesNumb == 12) {
      mesText = "Dezembro";
    }

    resultado.innerHTML = `É ${genero}, nasceu em ${mesText} de ${anoNasc.value}, e tem ${idadeRes} anos e ${mesRes} meses!`;
    resultado.style.display = "block";

    corpoDoc.style.transition = "all 1.0s cubic-bezier(0.25, 0.73, 0.50, 0.90)";
  } else if (radsex[1].checked == true) {
    genero = "Mulher";

    corpoDoc.style.backgroundColor = "#FFD4FF";

    var mesRes = Number(mesAtual) - Number(mesNasc.value);

    var idadeRes = Number(anoAtual) - Number(anoNasc.value);

    var mesText = "";

    if (mesNumb == 1) {
      mesText = "Janeiro";
    } else if (mesNumb == 2) {
      mesText = "Fevereiro";
    } else if (mesNumb == 3) {
      mesText = "Março";
    } else if (mesNumb == 4) {
      mesText = "Abril";
    } else if (mesNumb == 5) {
      mesText = "Maio";
    } else if (mesNumb == 6) {
      mesText = "Junho";
    } else if (mesNumb == 7) {
      mesText = "Julho";
    } else if (mesNumb == 8) {
      mesText = "Agosto";
    } else if (mesNumb == 9) {
      mesText = "Setembro";
    } else if (mesNumb == 10) {
      mesText = "Outubro";
    } else if (mesNumb == 11) {
      mesText = "Novembro";
    } else if (mesNumb == 12) {
      mesText = "Dezembro";
    }

    resultado.innerHTML = `É ${genero}, nasceu em ${mesText} de ${anoNasc.value}, e tem ${idadeRes} anos e ${mesRes} meses!`;
    resultado.style.display = "block";

    corpoDoc.style.transition = "all 1.0s cubic-bezier(0.25, 0.73, 0.50, 0.90)";
  } else if (radsex[2].checked == true) {
    genero = "LGBTQIAPN+";

    corpoDoc.style.backgroundImage =
      "url(imagens-modelo/imagem-arcoiris-grande.jpg)";

    corpoDoc.style.transition = "all 1.0s cubic-bezier(0.25, 0.73, 0.50, 0.90)";

    var mesRes = Number(mesAtual) - Number(mesNasc.value);

    var idadeRes = Number(anoAtual) - Number(anoNasc.value);

    var mesText = "";

    if (mesNumb == 1) {
      mesText = "Janeiro";
    } else if (mesNumb == 2) {
      mesText = "Fevereiro";
    } else if (mesNumb == 3) {
      mesText = "Março";
    } else if (mesNumb == 4) {
      mesText = "Abril";
    } else if (mesNumb == 5) {
      mesText = "Maio";
    } else if (mesNumb == 6) {
      mesText = "Junho";
    } else if (mesNumb == 7) {
      mesText = "Julho";
    } else if (mesNumb == 8) {
      mesText = "Agosto";
    } else if (mesNumb == 9) {
      mesText = "Setembro";
    } else if (mesNumb == 10) {
      mesText = "Outubro";
    } else if (mesNumb == 11) {
      mesText = "Novembro";
    } else if (mesNumb == 12) {
      mesText = "Dezembro";
    }

    resultado.innerHTML = `É ${genero}, nasceu em ${mesText} de ${anoNasc.value}, e tem ${idadeRes} anos e ${mesRes} meses!`;
    resultado.style.display = "block";
  }
}
