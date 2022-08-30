var agora = new Date() //FORMA DE PEGAR AS HORAS ATUAIS DO SISTEMA
var hora = agora.getHours()

console.log (`agora são ${hora} hora(s),`)

if (hora < 12 && hora > 5) {
    console.log('Bom dia!')
}
else if (hora <= 18 && hora > 12) {
    console.log('Boa tarde!')
}
else if (hora >= 19) {
    console.log('Boa noite!')
}
else if (hora <= 23 && hora < 5) {
    console.log('Boa madrugada')
}