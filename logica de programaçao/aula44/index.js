
/*try{
    console.log(naoexite)
}catch(err){
    console.log('nao exite')
    
}*/
function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser numero')
    }
    return x + y
}
try{
    console.log(soma('1', 3))
} catch(err){
    console.log(err);
}