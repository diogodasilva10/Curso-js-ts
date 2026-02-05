//herança em prototypes
//produto
// camiseta, caneca, lapis
function Produto(nome, preco){
    this.nome = nome
    this.nome = preco
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

function Camiseta(nome,preco,cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}
function Caneca(nome, preco, material){
    Produto.call(this, nome, preco)
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        }, 
        set: function(valor){
            if(typeof valor !== 'number') return 
            estoque = valor
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

camiseta.prototype = Object.create(Produto.prototype)

const camiseta = new Camiseta('regata', 7.5, 'preta')
camiseta.aumento(10)
console.log(camiseta)

