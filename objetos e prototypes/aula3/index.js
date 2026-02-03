// defineProperty -> getter e setters
function produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        configurable: false, // configuaravel
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('So aceita numeros')
            }
            estoquePrivado = valor
        }
    })
    }
const p1 = new produto('camiseta', 20, 3)

p1.estoque = 200
console.log(p1)

