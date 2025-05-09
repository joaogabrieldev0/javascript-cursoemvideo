var agora = new Date();
var hora = agora.getHours();
var minutos = agora.getUTCMinutes();
var segundos = agora.getUTCSeconds();

console.log(hora+':'+minutos+':'+segundos);

if (hora > 0 && hora < 6){}