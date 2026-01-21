/*try{
// é executa quando nao há erros
console.log(a)
console.log('abri um arquivo')
console.log('manipulei o arquivo e gerou erro')
console.log('fechei o arquivo')
}catch(e){
// é executada quando há erros
console.log('tratando o erro')
} finally{
    //é executado sempre
    console.log('eu smp sou executado')
}*/
function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('esperando instancia de date')
    }
    if(!data){
        data = new Date()
    }
    return data.toLocaleTimeString('pt-br',{
       hour12: false
    });
}
try{
  const data = new Date('01-01-1970 12:58:12')
  const hora = retornaHora(11)
  console.log(hora)
}catch(e){
   console.log(e)
}finally{
    console.log('tenha um bom dia')
}

