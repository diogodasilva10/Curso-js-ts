//função construtora -> objetos
// função fabrica -> objetos
//construtora -> pessoa (new)
//como cria uma função construtora
function Pessoa(nome, sobrenome){
    const ID = 123456

    const metodoInterno = function(){

    }

    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this.nome + 'sou um metodo')
    }
}
const p1 = new Pessoa('luiz', 'otavio')
const p2 = new Pessoa('maria', 'otavio')
console.log(p1.nome)
p1.metodo()

