// retorne a soma do dobro de todos os pares
// -> filter pares
// -> dobrar os valores
// -> reduzir (somar tudo)
const numeros = [5,50,80,1,2,3,4,5,7,8,11,15,22,27]
const numerosPares = numeros.filter(function(valor){
    return valor % 2 === 0
}).map(function(valor){
    return valor * 2
}).reduce(function(ac, valor){
    return ac + valor
})
//pares
//dobro
console.log(numerosPares)