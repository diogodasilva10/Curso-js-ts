// declaração de função(function hoisting)
falaOi()
function falaOi(){
    console.log('oie')
    
}
//first-class objects (Objetos de primeira classe)
// function expression
const souUmDado = function(){ //pode executar com uma variável normal
    console.log('sou um dado')
}
souUmDado()

function executarFuncao(funcao){
    funcao();
    console.log('vou executar sua funçao abaixo')
}
executarFuncao(souUmDado)

// arrow function 
const funcaoArrow = () =>{
    console.log('sou uma arrow function')
}
funcaoArrow()

// dentro de um objeto
const obj = {
    falar: function(){
        console.log('oi')
    }
}
obj.falar()