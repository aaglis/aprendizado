function calcular() {

    var number = document.getElementById('number')// trago o input
    var resultado = document.querySelector('select')// trago o select
    if (number.value == '') {
        // se o valor de number for nada:
        alert('[ERRO] Digite um número:')
    }
    else {
        var n = Number(number.value) // var n recebe o valor do input convertido pra number
        resultado.innerHTML = ''

        var item = document.createElement('option')//crio um elemento option
        for (var c = 1; c <= 10; c++) {
            //var c recebe 1, enquanto c for menor ou igual a 10, c +1.


            item.text = `${n} x ${c} = ${n * c}` // item recebe a conta
            resultado.appendChild(item)// trago a tag filho da a pagina html
        }
    }
}

