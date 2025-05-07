//Condições Aninhadas 2

var horaAgora = new Date()

var hora = horaAgora.getHours()
var dia = horaAgora.getDate()
var mes = (horaAgora.getMonth()) + 1
var ano = horaAgora.getFullYear()

if (hora <= 6){
   
    console.log('Boa Madrugada!')

} else if (hora > 6 && hora < 12){

    console.log('Bom Dia!')

} else if (hora > 12 && hora < 18){

    console.log('Boa Tard!')

} else {
    
    console.log('Boa Noite!')

}

console.log(`Hoje é dia ${dia}/${mes}/${ano}`)