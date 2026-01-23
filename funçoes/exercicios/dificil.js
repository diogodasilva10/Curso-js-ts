
calcular('+', 10, 20)

function calcular(a, b, c){
   
    if(a === '+'){
        console.log('+: ', b+c)
   }else if(a === '-' ){
      console.log('-', b-c)
   }else if(a === '/' ){
    console.log('/', b/c)
   }else{
    console.log('*', b*c)
   }
}
/*function numeroCinco (a){
     for(let i = 0; i <= 4; i++){
        console.log(a)
     }
     
}
numeroCinco(5)
*/
