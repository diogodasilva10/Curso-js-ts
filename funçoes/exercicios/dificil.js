
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

