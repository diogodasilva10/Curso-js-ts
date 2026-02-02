//map
const numeros = [5,50,80,1,2,3,4,5,7,8,11,15,22,27]
const dobroNumero = numeros.map(function(valor){
   return valor * 2
})
console.log(dobroNumero)


const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47},
]
const nomes = pessoas.map(function(obj){
    return obj.nome
})

const idades = pessoas.map(function(obj){
    delete obj.nome
    return obj

})
//console.log(idades)

const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj}
    newObj.id = indice
    return obj;

})
console.log(comIds)