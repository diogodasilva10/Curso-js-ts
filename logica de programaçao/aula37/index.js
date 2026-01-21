const nome = ['luiz', 'Otavio', 'henrique'];

//for(let i = 0; i < nome.length; i++){
 //   console.log(nome[i])
//}

//for(let i in nome){
//    console.log(nome[i])
//}

for(let valor of nome){
    console.log(valor);
}

nome.forEach(function(el){
    console.log(el)
});
// qual usar?
//array qualquer
// para obj of nao dá

// for classico - geralmente com itaráveis(array ou strings)
// for in - retorna o índice ou chave (strings, array ou objetos)
// for of - retorna o valor em si (iteráveis, arrays ou strings)