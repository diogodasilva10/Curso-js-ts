
//                -5       -4       -3         -2          -1
//                0        1        2          3          4
const nomes = ['maria', 'joao', 'eduardo', 'gabriel', 'julia']
 
//const removidos = nomes.splice(3, 2, 'luiz', 'otavio')
//shift
//const removidos = nomes.splice(0,1)
//push
//nomes.splice(nomes.length, 0, 'luiz')
//unshift
nomes.splice(0, 0, 'luiz')

console.log(nomes)