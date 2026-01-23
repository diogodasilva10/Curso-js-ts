// return
// retorna um valor
//termina a função
/*function soma(a, b){
    return a + b
}

console.log(soma(5, 2))
function soma2(a,b){
    console.log(a + b)

}
soma2(5, 2)*/
function criaPessoa(nome, sobrenome){
    return {nome, sobrenome}
}
const p1 = criaPessoa('Luiz', 'otavio')
const p2 = {
    nome: 'joao',
    sobrenome: 'oliveira'
};
console.log(p1)
console.log(p2)

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + '' + resto
    }
    return falaResto
}
//const olaMundo = falaFrase('ola')
const fala = falaFrase('ola')
const resto = fala('mundo')
console.log(resto)

function criamulticador(multiplicador){
    function multiplicacao(n){
        return n * multiplicador // é possivel cria a funçao assim return function(n)
    } 
    return multiplicacao
}
const duplica = criamulticador(2)
const triplica = criamulticador(3)
const quadriplica = criamulticador(4)
console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))