function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumenta = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

const p1 = new Produto('camiseta', 50)

const p2 = {
    nome: 'caneca',
    preco: 15
}
Object.setPrototypeOf(p2, produto.prototype)

p2.aumenta(10)

const p3 = Object.create(Produto.prototype )
p3.preco = 113
p3.aumenta(10)

//p1.desconto(100)
p1.aumenta(100)
console.log(p1)












//  new object -> object.prototype

/*const objA = {
    chaveA: 'A'
}
const objB = {
    chaveB: 'B'
}

Object.setPrototypeOf(objB, objA)
console.log(objB.chaveA)*/
