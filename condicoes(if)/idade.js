var idade = 11
console.log(`olá, você tem ${idade} anos !`)
if (idade > 18 && idade < 67) {
    console.log ('voto obrigatório')
}

else if (idade >= 16 || idade >=67) {
    console.log ('voto opicional')
}
else {
   console.log('não vota')
}