
//valor por referência
const nomes = ['eduardo', 'maris', 'diogo']
//const nomes = new Array('eduardo', 'diogo')
const novo = [...nomes]

novo.pop()

console.log(nomes.length)
console.log(novo)