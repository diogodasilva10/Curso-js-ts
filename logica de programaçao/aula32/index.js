const pessoa = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereço: {
        rua: 'Av Brasil',
        numero: 320
    }
    
}
// atribuiçao via desestruturação 
const { endereço: {rua, numero}, endereço } = pessoa
console.log(rua, numero, endereço)