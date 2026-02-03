/*
object.value
object.entries
object.assign(des, any)
object.getOwmPropertyDescriptor(o, 'prop')
...(spread)

// ja vimos
object.keys(retorna as chaves)
object.freeze (congela o objeto)
object.defineProperty(define uma propriedades)
object.defineProperties(define varias propriedades)
 */

const produto ={
    nome: 'caneca',
    preco: 1.8
}

console.log(Object.entries(produto))