function contar() {
    //  seleciono as tag's html pelo id
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    //"se o valr de inicio ou fim ou passo for igual a zero:"
        window.alert('[ERRO] impossivel contar!')
    } else {
        resultado.innerHTML = 'Contando...'
        //conversão das strings recebidas dos imputs
        var init = Number(inicio.value)
        var fimm = Number(fim.value)
        var pass = Number(passo.value)
        if (init < fimm) {
            for (var calculo = init; calculo <= fimm; calculo += pass) {
                // var calculo recebe init, se calculo for menor ou igual ao fimm,calculo + pass
                resultado.innerHTML += `${calculo} \u{1F449} `
            }
        } else {
            for (var calculo = init; calculo >= fimm; calculo -= pass) {
                // var calculo recebe init, se calculo for menor ou igual ao fimm, calculo - pass 
                resultado.innerHTML += `${calculo} \u{1F449} `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`

    }
}