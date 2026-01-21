// escreva uma função ePaisagem que
// recebe dois argumentos, largura e altura
// de uma imagem (number).
//retorne true se a imagem estiver no modo
//paisagem
function ePaisagem(largura, altura){
    // modo de fazer
   /* if(x  >= y){
        return true
    } else{
        return false
    }*/
   // outro modo mais facil e rapido
   return largura > altura ? true : false;
}
console.log(ePaisagem(1920, 1090))