//parametros
// argumentos que sustenta todos os argumentos enviados
//argumentos sao os valores que envia para os parametros
/*function funcao(a, b = 2, c = 4){
    
    console.log(a + b + c)
  
}
funcao(2, undefined,20)*/
/*function funcao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)

}
funcao({nome: 'luiz', sobrenome: 'otavio', idade: 11})*/
const conta = function (operador, acumulador, ...numeros){
    for(let numero of numeros ){
      if(operador === '+')  acumulador += numero
      if(operador === '-')  acumulador -= numero
      if(operador === '/')  acumulador /= numero
      if(operador === '*')  acumulador *= numero
    }
    console.log(acumulador)
};
conta('/', 1, 20,30,40,50)