const numeros = [1,2,3,4,5,6,7,8,9]
for(let i in numeros){

    let numero = numeros[i]
    
    if(numero === 2 || numero === 5){
        //console.log('pulei o numero 2')
        continue; //pular para o proximo
    }
   
     console.log(numero)
    if(numero === 7){
        break; // encontrou ele sair do laço
    }

   
}