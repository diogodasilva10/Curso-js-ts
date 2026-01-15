/*
operadores de comparação
> maior que
>= maior que
< menor que
<= menor que ou igual a
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/ 
const comp = 10 > 5
console.log(comp);

console.log(10 >= 5)
console.log(10 < 5)
console.log(10 <= 5)
console.log(10 == 10)
console.log(10 === 10)
console.log(10 != 12)
console.log(10 !== 12)

// posso criar variaveis separadas
/*exemplo
const num1 = 10 
const num2 = 10
const comp = num1 == num2
console.log(comp)
*/
const num1 = 10 //number
const num2 = '10' // string
const comp1 = num1 == num2
console.log(comp)