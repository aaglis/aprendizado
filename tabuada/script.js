var number = document.getElementById('number')
var resultado = document.querySelector('textarea')

function calcular() {
    if (number.value == '') {
        alert('[ERRO] Digite um número:')
    }
    else {
    resultado.innerHTML =
        `${number.value} x 1 = ${number.value * 1}
${number.value} x 1 = ${number.value * 2}
${number.value} x 1 = ${number.value * 3}
${number.value} x 1 = ${number.value * 4}
${number.value} x 1 = ${number.value * 5}
${number.value} x 1 = ${number.value * 6}
${number.value} x 1 = ${number.value * 7}
${number.value} x 1 = ${number.value * 8}
${number.value} x 1 = ${number.value * 9}
${number.value} x 1 = ${number.value * 10}`
    }
}

