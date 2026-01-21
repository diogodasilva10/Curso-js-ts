// escreva uma função que recebe um numero e
// retorne o seguinte
//numero é divisivel por 3 = fizz
//numero é divisivel por 5 = buzz
//numero é divisivel por 3 = FizzBuzz
//numero NAO é divisivel por 3 e 5 = retorna o proprio numero
//checar se o numero é realmente um numero
// use a função com numeros de 0 a 100
function fizzBuzz(numero){
 if(typeof numero !== 'number') return numero
 if(numero % 3 === 0 && numero % 5 === 0) return 'fizzBuzz'
 if(numero % 3 === 0) return 'fizz'
 if(numero % 5 === 0) return 'buzz'
}
console.log('a', fizzBuzz('a'))
for(let i = 0; i <= 100; i++){
    console.log(i, FizzBuzz(i))
}