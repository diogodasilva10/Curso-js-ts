function verificaIdade(idade){
    if(idade >= 18){
        console.log('vc é maior de idade')
    }else{
        console.log('vc é menor de idade')
    }
}
verificaIdade(18)

function media(a,b,c){
   console.log((a + b + c) / 3);
}
media(10,5,7)

function verificaParImapar(numero){
      if(numero % 2 === 0){
        console.log('par')
      }else{
        console.log('imapar')
      }
      
}
verificaParImapar(8)