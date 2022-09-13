var valores = [0, 2, 3, 4, 5]

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`a posição ${pos} tem como valor ${valores[pos]}`)
}

console.log('/////////////////MAIS SIMPLIFICADO')

for (let pos in valores) {
    console.log(`a posição ${pos} tem como valor ${valores[pos]}`)
}