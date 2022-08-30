var hora = document.querySelector('input#hora')
var resultado = document.querySelector('p#resultado')
var fundo = document.querySelector('body')

fundo.style.justifyContent = 'center'
fundo.style.textAlign = 'center'

function calcular() {
    if (hora.value < 12 && hora.value > 4) {
        fundo.style.backgroundColor = 'yellow'
        resultado.innerHTML = 'Está de manhã, <strong>BOM DIA!</strong>'
    }
    else if (hora.value <= 18 && hora.value >=12) {
        fundo.style.backgroundColor = 'orange'
        resultado.innerHTML = 'Está de tarde, <strong>BOA TARDE!</strong>'
    }
    else if (hora.value > 18 && hora.value < 24) {
        fundo.style.backgroundColor = 'purple'
        resultado.innerHTML = 'Está de noite, <strong>BOA NOITE!</strong>'
    }
    else {
        fundo.style.backgroundColor = 'gray'
        resultado.innerHTML = 'Está de madrugada, <strong>BOA MADRUGADA!</strong>'
    }

}