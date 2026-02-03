// Object.defineProperty() e Object.defineProperties()
function produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar
        configurable: false // configuaravel
    })
    /*Object.defineProperties(this,{
        nome: {
            enumerable: true, // mostra a chave
        value: nome, // valor
        writable: false, // pode alterar
        configurable: false // configuaravel
        },
        preco:{
        enumerable: true, // mostra a chave
        value: preco, // valor
        writable: false, // pode alterar
        configurable: false // configuaravel
        }
    })*/
}
const p1 = new produto('camiseta', 20, 3)
p1.estoque = 5000
console.log(p1)
console.log(Object.keys(p1))

for(let chave in p1){
    console.log(chave)
}
