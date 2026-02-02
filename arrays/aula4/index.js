// filter, map, reduce
// sao as tres mais usada
//filter
const numeros = [5,50,80,1,2,3,4,5,7,8,11,15,22,27]

/*function callbackFilter(valor){
   return valor > 10;
}*/

//filter -> sempre retornar um array, com a mesma quantidade de elementos ou menos
const numerosFiltrados = numeros.filter((valor) => {
    return valor > 10
})
//console.log(numerosFiltrados)



//retorna as pessoas que tem o nome com 5 letras ou mais
// retorna as pessoas com mais de 50 anos
//retorna as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47},
]
const pessoasComNomegrade = pessoas.filter(function(obj){
    return obj.nome.length >= 5
})
//console.log(pessoasComNomegrade)
const pessoasMaisDeIdade = pessoas.filter(function(obj){
    return obj.idade > 50
})
console.log(pessoasMaisDeIdade)
const pessoasTerminaComa = pessoas.filter(function(obj){
    return obj.nome.toLowerCase().endsWith('a')
})
console.log(pessoasTerminaComa)