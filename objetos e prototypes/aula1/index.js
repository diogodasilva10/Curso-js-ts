//criar obj -> '' ""
/*const pessoa = {
    nome: 'kuiz',
    sobrenome: 'otavio'
}                           
const chave = 'nome'
console.log(pessoa[chave])
*/
// new object
const pessoa1 = new Object();
pessoa1.nome = 'luiz'
pessoa1.sobrenome = 'otavio'
pessoa1.idade = 30
pessoa1.falarNome = function(){
return (`${this.nome} esta falando seu nome`)
}
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}
 for(let chave in pessoa1){
    console.log(pessoa1[chave])
 }
 
/*const pessoa2 = {
    nome: 'diogo',
    sobrenome: 'silva'
}*/
//para apagar um chave
/*
delete pessoa1.nome
*/

// factory functions / constructor functions / classes
//factory functions
/*function criaPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}*/
/*const p1 = criaPessoa('luiz', 'otavio')
console.log(p1.nomeCompleto())*/
//constructor
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}
// {} <- this
const p2 = new Pessoa('luiz', 'diogo')
const p3 = new Pessoa('luiz', 'diogo')
console.log(p2)
console.log(p3)

