function rand(min,max){
    min *= 1000;
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
        reject(false);
        return
        } 

        setTimeout(() => {
        resolve(msg)
        }, tempo)
    })
}
//promise.all promise.race promise.resolve promise.reject
const promises = [
    'primeiro valor',
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 3000),
    esperaAi('promise 3', 3000),

]
Promise.race(promises)
.then(function(valor){
    console.log(valor)
})
.catch(function(erro){
    console.log(erro)
})

function baixaPagina(){
    const emCache = true
    if(emCache){
        return Promise.reject('pagina em cache')
    } else{
        return esperaAi('Baixa a pagina', 3000)
    }
}
baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e => console.log(e))